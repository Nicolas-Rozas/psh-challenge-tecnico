"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MainContainer,
  SideNavBarContainer,
  ChatAreaContainer,
  InputContainer,
  ChatContainer,
} from "./styles";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import { UserDetails } from "@/types/chatTypes";
import ChatBubble from "../components/ChatBubble";
import useMessage from "@/Hooks/useMessage";
import { initialChats } from "./mockData";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null); // Estado para almacenar el usuario seleccionado
  const chatEndRef = useRef<HTMLDivElement>(null); // Referencia al final del área de chat para scroll
  const { messageText, setMessageText } = useMessage(); // Hook personalizado para manejar el texto del mensaje

  // Función para manejar la selección de usuario
  const handleSelectUser = (user: UserDetails) => {
    setSelectedUser(user);
  };

  // Efecto para hacer scroll hacia abajo cuando se selecciona un nuevo usuario
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedUser]);

  // Función para manejar cambios en el texto del mensaje
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(event.target.value);
  };

  // Función para manejar el envío de mensajes
  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedUser || !messageText.trim()) {
      return; // Evitar enviar mensajes vacíos
    }

    // Crear un nuevo mensaje
    const newMessage = {
      id: selectedUser.messages.length + 1,
      text: messageText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSent: true,
    };

    // Actualizar los mensajes del usuario seleccionado
    setSelectedUser((prevUser) => {
      if (!prevUser) return null;
      const updatedMessages = [...prevUser.messages, newMessage];
      return { ...prevUser, messages: updatedMessages };
    });

    // Limpiar el campo de texto del mensaje después de enviar
    setMessageText("");
  };

  return (
    <MainContainer>
      <SideNavBarContainer>
        <SideNavBar
          initialChats={initialChats}
          onSelectUser={handleSelectUser}
        />
      </SideNavBarContainer>
      {selectedUser && (
        <ChatAreaContainer>
          <Header
            name={selectedUser.name}
            role={selectedUser.role}
            imageUrl={selectedUser.imageUrl}
          />
          <ChatContainer>
            {selectedUser.messages.map((msg) => (
              <ChatBubble
                key={msg.id}
                message={msg.text}
                time={msg.time}
                isSent={msg.isSent}
                imageUrl={selectedUser.imageUrl}
              />
            ))}
            {/* Referencia al final del área de chat para scroll */}
            <div ref={chatEndRef} />
          </ChatContainer>
          <InputContainer>
            <form onSubmit={handleMessageSubmit}>
              <input
                type="text"
                value={messageText}
                onChange={handleMessageChange}
                placeholder="Type your message..."
              />
              <button type="submit">SEND</button>
            </form>
          </InputContainer>
        </ChatAreaContainer>
      )}
    </MainContainer>
  );
};

export default Home;
