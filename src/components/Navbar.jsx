import React, { useContext } from "react";
//context
import { AuthContext } from "../context/AuthContext";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
//style
import { Img, Logo, NavbarS, SpanText, User } from "./Navbar.elements";
//components

/*
<User>
        
    <button onClick={() => signOut(auth)}>logout</button>
  </User>
*/
function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <NavbarS>
      <Logo>Gip-Chat</Logo>
    </NavbarS>
  );
}

export default Navbar;
