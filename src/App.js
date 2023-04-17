import React from "react";
//style
import "./style.scss"
//components
import Register from "./pages/Register"
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app"> 
      <Register />
    </div>
  );
}

export default App;
