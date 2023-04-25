import React, { useState } from "react";
//react-router-dom
import { NavLink, useNavigate } from "react-router-dom";
//images
import Add from "../img/addAvatar.png";
//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Gip-Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        <p>
          You don`t have an account ?{" "}
          <NavLink to="/register">Registration</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
