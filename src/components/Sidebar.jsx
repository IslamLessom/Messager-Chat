import React from "react";

//components
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Navigate from "./Navigate";
import { SidebarS } from "./Sidebar.elements";

function Sidebar() {
  return (
    <SidebarS>
      <Navbar />
      <Navigate />
      {window.location.pathname == "/message" ? (
        <>
          <Search />
          <Chats />
        </>
      ) : (
        <></>
      )}
    </SidebarS>
  );
}

export default Sidebar;
