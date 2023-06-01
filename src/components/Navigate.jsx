import React, { useContext, useEffect, useState } from "react";
//route
import { NavLink } from "react-router-dom";
//styled
import {
  DisplayFirstName,
  ImagesLink,
  Links,
  LinksText,
  NavigateS,
  ButtonsExit,
  UserName,
} from "./Navigate.elements";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";

function Navigate() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //context
  const { currentUser } = useContext(AuthContext);
  //search my profile in object
  const allMassive = profile.map((item) => item.uid);
  const profileUid = currentUser.uid;
  const myProfile = allMassive.indexOf(profileUid);
  //firebase
  const profileCollectionRef = collection(db, "users");
  useEffect(() => {
    const getProfile = async () => {
      const data = await getDocs(profileCollectionRef);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfile().finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "40px",
        }}
      >
        Загрузка....
      </h1>
    );
  }

  return (
    <NavigateS>
      <ul>
        <Links to="/">
          <ImagesLink src={profile[myProfile].photoURL} />
          <DisplayFirstName>
            <UserName>
              {profile[myProfile].displayFirstName}
              {profile[myProfile].displayName}
            </UserName>
          </DisplayFirstName>
        </Links>
        <Links to="/message">
          <svg
            style={{ paddingRight: "10px" }}
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.35 0-2.68-.2-3.92-.6-1.4 1.3-3.46 2-6.13 2.1a1.43 1.43 0 0 1-1.36-2.02C3.5 20.96 4 19.48 4.1 18.6a9 9 0 0 1-1.6-5.1c0-5.56 5.18-10 11.5-10zm0 2c-5.28 0-9.5 3.62-9.5 8 0 1.5.5 2.96 1.43 4.21a1 1 0 0 1 .2.6c-.01 1.05-.46 2.57-1.34 4.63 1.99-.21 3.39-.83 4.25-1.84a1 1 0 0 1 1.1-.29c1.21.45 2.51.69 3.86.69 5.28 0 9.5-3.62 9.5-8s-4.22-8-9.5-8z"
                fill="currentColor"
                fill-rule="nonzero"
                style={{ color: "rgb(77, 110, 231)" }}
              ></path>
            </g>
          </svg>

          <LinksText>Мессенджер</LinksText>
        </Links>
        <Links to="/news">
          <svg
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            style={{ paddingRight: "10px" }}
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M-3-3h28v28H-3z" opacity=".04"></path>
              <path
                d="M19.5 6v-.65c0-1.07-.07-1.45-.28-1.84-.17-.32-.41-.56-.73-.73-.39-.2-.77-.28-1.84-.28H5.35c-1.07 0-1.45.07-1.84.28-.32.17-.56.41-.73.73-.2.39-.28.77-.28 1.84V6zm0 2h-17v8.65c0 1.07.07 1.45.28 1.84.17.32.41.56.73.73.39.2.77.28 1.84.28h11.3c1.07 0 1.45-.07 1.84-.28.32-.17.56-.41.73-.73.2-.39.28-.77.28-1.84zM5.35.5h11.3c1.37 0 2.07.13 2.79.52.66.35 1.19.88 1.54 1.54.39.72.52 1.42.52 2.79v11.3c0 1.37-.13 2.07-.52 2.79a3.73 3.73 0 0 1-1.54 1.54c-.72.39-1.42.52-2.79.52H5.35c-1.37 0-2.07-.13-2.79-.52a3.73 3.73 0 0 1-1.54-1.54C.63 18.72.5 18.02.5 16.65V5.35c0-1.37.13-2.07.52-2.79.35-.66.88-1.19 1.54-1.54C3.28.63 3.98.5 5.35.5z"
                fill="currentColor"
                fill-rule="nonzero"
                style={{ color: "rgb(77, 110, 231)", marginRight: "30px" }}
              ></path>
            </g>
          </svg>
          <LinksText>Новости</LinksText>
        </Links>
        <Links to="/friends">
          <svg
            style={{ paddingRight: "10px", marginLeft: "-5px" }}
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M17.5 8.5A3.5 3.5 0 0 0 14 5a3.5 3.5 0 0 0-3.5 3.5 3.5 3.5 0 1 0 7 0zm2 0A5.5 5.5 0 0 1 14 14a5.5 5.5 0 0 1-5.5-5.5 5.5 5.5 0 1 1 11 0zM7 20.64c0 .95-.08.86.46.86h13.58c.54 0 .46.09.46-.86 0-2.28-3.3-3.64-7.25-3.64S7 18.36 7 20.64zm-2 0C5 16.76 9.3 15 14.25 15s9.25 1.76 9.25 5.64c0 2.02-.78 2.86-2.46 2.86H7.46C5.78 23.5 5 22.66 5 20.64z"
                fill="currentColor"
                fill-rule="nonzero"
                style={{ color: "rgb(77, 110, 231)" }}
              ></path>
            </g>
          </svg>
          <LinksText>Друзья</LinksText>
        </Links>
        <ButtonsExit
          style={{ marginTop: "10px" }}
          onClick={() => signOut(auth)}
        >
          Выход
        </ButtonsExit>
      </ul>
    </NavigateS>
  );
}

export default Navigate;
