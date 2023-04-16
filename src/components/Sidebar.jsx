import React from "react";

//components
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
