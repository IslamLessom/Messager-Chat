import React from "react";
//components
import Sidebar from "../components/Sidebar";
//styled
import { Container, ProfileContent, ProfileS } from "./Profile.elements";

function Profile() {
  return (
    <ProfileS>
      <Container>
        <Sidebar />
        <ProfileContent></ProfileContent>
      </Container>
    </ProfileS>
  );
}

export default Profile;
