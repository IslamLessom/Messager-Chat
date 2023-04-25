import React from "react";
//route
import { NavLink } from "react-router-dom";

function Navigate() {
  return (
    <div className="navigate">
      <ul>
        <NavLink
          style={{
            listStyleType: "none",
            paddingTop: "15px",
            color: "white",
            textDecoration: "none",
          }}
          to="/"
        >
          Моя страница
        </NavLink>
        <NavLink
          style={{
            listStyleType: "none",
            paddingTop: "15px",
            color: "white",
            textDecoration: "none",
          }}
          to="/message"
        >
          Сообщения
        </NavLink>
        <NavLink
          style={{
            listStyleType: "none",
            paddingTop: "15px",
            color: "white",
            textDecoration: "none",
          }}
          to="/news"
        >
          Новости
        </NavLink>
        <NavLink
          style={{
            listStyleType: "none",
            paddingTop: "15px",
            color: "white",
            textDecoration: "none",
          }}
          to="/friends"
        >
          Друзья
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigate;
