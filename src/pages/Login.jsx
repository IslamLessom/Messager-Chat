import React, { useState } from "react";
//react-router-dom
import { NavLink, useNavigate } from "react-router-dom";
//images
import Add from "../img/addAvatar.png";
//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
} from "./Login.elements";

function Login() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
          <Input required type="email" placeholder="email" />
          <Input required type="password" placeholder="password" />
          <Button>Sign up</Button>
        </Form>
        {loading && "Uploading and compressing the image please wait..."}
        {err && <span>Something went wrong</span>}
        <p>
          You don`t have an account ?{" "}
          <NavLink to="/register">Registration</NavLink>
        </p>
      </FormWrapper>
    </FormContainer>
  );
}

export default Login;
