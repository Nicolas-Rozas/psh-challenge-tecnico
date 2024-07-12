import React, { useEffect, useState } from "react";
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
import useRandomUser from "@/Hooks/useRandomUser";
import { Props, UserDetails } from "@/types/chatTypes";

// Definición de las props del componente SideNavBar
interface SideNavBarProps extends Props {
  initialChats: UserDetails[];
  onSelectUser: (user: UserDetails) => void;
  lastSentMessage?: string;
  menuOpen?: boolean;
}

const SideNavBar = ({ initialChats, onSelectUser }: SideNavBarProps) => {
  // Estados del componente
  const [chats, setChats] = useState<UserDetails[]>(initialChats);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);

  // Hook personalizado para añadir usuarios aleatorios
  const { addUser } = useRandomUser();

  // Función para añadir un nuevo usuario
  const handleAddNewUser = async () => {
    try {
      // Verifica si se ha alcanzado el límite de usuarios
      if (chats.length >= 5) {
        setShowToast(true);
        setToastMessage("Limite de usuarios!");
        setTimeout(() => setShowToast(false), 2000);
        return;
      }

      const newUser = await addUser();

      if (newUser) {
        // Verifica si el usuario ya existe
        const existingUser = chats.find((user) => user.name === newUser.name);
        if (!existingUser) {
          // Añade el nuevo usuario si no existe
          setChats((prevChats) => [...prevChats, newUser]);
          setShowToast(true);
          setToastMessage("¡Nuevo usuario agregado!");
          setTimeout(() => setShowToast(false), 2000);
        } else {
          // Muestra un mensaje si el usuario ya existe
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

  // Función para manejar la selección de un usuario
  const handleUserSelect = (user: UserDetails) => {
    setSelectedUser(user);
    onSelectUser(user);
    setMenuOpen(false);
  };

  // Efecto para actualizar los chats 
  useEffect(() => {
    setChats(initialChats);
  }, [initialChats]);

  // Función para cerrar el toast
  const closeToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  // Función para alternar el menú en responsive 
  const toggleMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        {!menuOpen && <MenuIcon>☰</MenuIcon>}
      </HamburgerButton>
      <MainContainer
        style={{
          transform:
            typeof window !== "undefined" && window.innerWidth <= 768
              ? menuOpen
                ? "translateX(0)"
                : "translateX(-100%)"
              : "translateX(0)",
        }}
      >
        <TopSection>
          <Image src="/psh_brand.png" alt="logo" width={80} height={80} />
          <Title>React Chat</Title>
        </TopSection>
        <BottomSection>
          {chats.map((chat: UserDetails) => (
            <ChatCard
              key={chat.id}
              name={chat.name}
              lastMessage={chat.lastMessage || ""}
              time={chat.time}
              imageUrl={chat.imageUrl}
              selected={selectedUser?.id === chat.id}
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
