import React, { useState } from "react";
import {
  MainContainer,
  TopSection,
  BottomSection,
  Title,
  CreateNew,
  HamburgerButton,
  MenuIcon,
} from "./styles";
import Image from "next/image";
import ErrorToast from "../ErrorToast";
import ChatCard from "../ChatCard";
import { Props, UserDetails } from "@/types/chatTypes";
import useRandomUser from "@/Hooks/useRandomUser";

interface SideNavBarProps extends Props {
  lastSentMessage?: string;
  menuOpen?: boolean;
}

const SideNavBar = ({
  initialChats = [],
  onSelectUser,
  lastSentMessage,
}: SideNavBarProps) => {
  const [chats, setChats] = useState<UserDetails[]>(initialChats.slice(0, 3));
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const { addUser } = useRandomUser();

  const handleAddNewUser = async () => {
    try {
      if (chats.length >= 5) {
        setShowToast(true);
        setToastMessage("¡No se pueden agregar más usuarios!");
        setTimeout(() => setShowToast(false), 2000);
        return;
      }

      const newUser = await addUser();

      if (newUser) {
        const existingUser = chats.find((user) => user.name === newUser.name);

        if (!existingUser) {
          setChats((prevChats) => [...prevChats, newUser]);
          setShowToast(true);
          setToastMessage("¡Nuevo usuario agregado!");
          setTimeout(() => setShowToast(false), 2000);
        } else {
          setShowToast(true);
          setToastMessage("¡Usuario duplicado!");
          setTimeout(() => setShowToast(false), 2000);
        }
      }
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      setShowToast(true);
      setToastMessage("¡Error al obtener usuario!");
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handleUserSelect = (user: UserDetails) => {
    setSelectedUser(user);
    onSelectUser(user);
    setMenuOpen(false);
  };

  const closeToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        {!menuOpen && <MenuIcon>☰</MenuIcon>}
      </HamburgerButton>
      <MainContainer menuOpen={menuOpen}>
        <TopSection>
          <Image src="/psh_brand.png" alt="logo" width={80} height={80} />
          <Title>React Chat</Title>
        </TopSection>
        <BottomSection>
          {chats.map((chat) => (
            <ChatCard
              key={chat.id}
              name={chat.name}
              lastMessage={lastSentMessage ?? chat.lastMessage ?? ""}
              time={chat.time}
              imageUrl={chat.imageUrl}
              selected={selectedUser && selectedUser.name === chat.name}
              onClick={() => handleUserSelect(chat)}
            />
          ))}
          <CreateNew onClick={handleAddNewUser}>+ Create Now</CreateNew>
          {showToast && (
            <ErrorToast message={toastMessage} onClose={closeToast} />
          )}
        </BottomSection>
      </MainContainer>
    </>
  );
};

export default SideNavBar;
