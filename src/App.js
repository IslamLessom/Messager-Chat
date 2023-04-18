import React from "react";
//style
import "./style.scss"
//react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
//components
import Register from "./pages/Register"
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
