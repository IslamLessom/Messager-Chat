import React, { useState } from "react";
//react-router-dom
import { NavLink, useNavigate } from "react-router-dom";
//images
import Add from "../img/addAvatar.png";
//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
//styled
import {
  Button,
  Description,
  Form,
  FormContainer,
  FormWrapper,
  Img,
  Input,
  Label,
  Logo,
  Title,
} from "./Register.elements";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Logo>Gip-Chat</Logo>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input required type="text" placeholder="display name" />
          <Input required type="email" placeholder="email" />
          <Input required type="password" placeholder="password" />
          <Input required style={{ display: "none" }} type="file" id="file" />
          <Label htmlFor="file">
            <Img src={Add} alt="" />
            <Description>Add an avatar</Description>
          </Label>
          <Button disabled={loading}>Sign up</Button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </Form>
        <p>
          You do have an account? <NavLink to="/login">Login</NavLink>{" "}
        </p>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
