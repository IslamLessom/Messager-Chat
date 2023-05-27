import React from "react";

//components
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Navigate from "./Navigate";
import { ContainerMenu, SidebarS } from "./Sidebar.elements";

function Sidebar() {
  return (
    <SidebarS>
      <Navbar />
      <ContainerMenu>
        <Navigate />
        {window.location.pathname == "/message" ? (
          <>
            <Search />
            <Chats />
          </>
        ) : (
          <></>
        )}
      </ContainerMenu>
    </SidebarS>
  );
}

export default Sidebar;
