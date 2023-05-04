import React, { useContext, useEffect, useState } from "react";
//context
import { AuthContext } from "../context/AuthContext";
//firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
//components
import Sidebar from "../components/Sidebar";
import NewsCreateModal from "../components/NewsCreateModal";
//styled
import {
  Add,
  AddPublication,
  Container,
  ContainerAdd,
  ContainerProfileInfo,
  ContainerRecords,
  NameContainer,
  NameRecords,
  ProfileCity,
  ProfileContent,
  ProfileFirstName,
  ProfileFriends,
  ProfileImages,
  ProfileInfo,
  ProfileName,
  ProfileS,
  Records,
  Title,
} from "./Profile.elements";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalPublication, setModalPublication] = useState(false);

  const profileCollectionRef = collection(db, "users");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getProfile = async () => {
      const data = await getDocs(profileCollectionRef);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfile().finally(() => setIsLoading(false));
  }, []);

  const allMassive = profile.map((item) => item.uid);
  const profileUid = currentUser.uid;
  const myProfile = allMassive.indexOf(profileUid);

  if (isLoading) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "40px",
        }}
      >
        Загрузка....
      </h1>
    );
  }

  return (
    <ProfileS>
      <Container>
        <Sidebar />
        <ProfileContent>
          <ContainerProfileInfo>
            <>
              <ProfileImages src={profile[myProfile].photoURL} />
              <ProfileInfo>
                <NameContainer>
                  <ProfileFirstName>
                    {profile[myProfile].displayFirstName}
                  </ProfileFirstName>
                  <ProfileName>{profile[myProfile].displayName}</ProfileName>
                </NameContainer>
                <ProfileCity>Город - {profile[myProfile].city}</ProfileCity>
                <ProfileFriends>Друзей - 10</ProfileFriends>
                <ContainerAdd>
                  <Add onClick={() => setModalAdd(true)}>Добавить запись</Add>
                  {modalPublication === true && (
                    <NewsCreateModal
                      setModalPublication={setModalPublication}
                    />
                  )}
                  <AddPublication onClick={() => setModalPublication(true)}>
                    Добавить публицию
                  </AddPublication>
                  {modalPublication === true && (
                    <NewsCreateModal
                      setModalPublication={setModalPublication}
                    />
                  )}
                </ContainerAdd>
              </ProfileInfo>
            </>
          </ContainerProfileInfo>
          <ContainerRecords>
            <Title>Мои Записи:</Title>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
            <NameRecords>Как я провел лето</NameRecords>
            <Records>
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето Как я провел лето Как я провел лето Как я провел лето Как я
              провел лето Как я провел лето Как я провел лето Как я провел лето
              Как я провел лето Как я провел лето Как я провел лето Как я провел
              лето
            </Records>
          </ContainerRecords>
        </ProfileContent>
      </Container>
    </ProfileS>
  );
}

export default Profile;
