import React, { useContext } from "react";
//context
import { AuthContext } from './../context/AuthContext';
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
//components

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo">Gip-Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
