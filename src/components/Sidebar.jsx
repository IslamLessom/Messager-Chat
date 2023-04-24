import React from "react";

//components
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Navigate from "./Navigate";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Navigate />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
