import React from "react";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
//components

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Message Chat</span>
      <div className="user">
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
        <span>Islam</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
