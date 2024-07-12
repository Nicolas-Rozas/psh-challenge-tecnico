"use client";
import React, { useState, useEffect, useMemo } from "react";
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
import { initialChats } from "./mockData";
import Input from "@/components/Input";

const Home = () => {
  // Estado para almacenar la lista de chats
  const [chats, setChats] = useState(initialChats);


  // Estado para almacenar el ID del usuario seleccionado actualmente
  const [selectedUserId, setSelectedUserId] = useState<string | number | null>(null);

  // Función para manejar la selección de un usuario de la barra de navegación
  const handleSelectUser = (user: UserDetails) => {
    // Actualiza el ID del usuario seleccionado
    setSelectedUserId(user.id);
    
    // Actualiza el estado de los chats
    setChats((prevChats) => {
      // Verifica si el usuario ya existe en la lista de chats
      if (!prevChats.some((chat) => chat.id === user.id)) {
        // Si el usuario no existe, se añade a la lista de chats
        // con un array de mensajes vacío y campos inicializados
        return [...prevChats, {
          id: user.id,
          name: user.name,
          role: user.role,
          imageUrl: user.imageUrl,
          messages: [],
          lastMessage: "",
          time: ""
        }];
      }
      // Si el usuario ya existe, no se  modifica la lista de chats
      return prevChats;
    });
  };

  // Efecto para hacer scroll automático en el contenedor de chat
  // Se ejecuta cada vez que cambia el usuario seleccionado o los mensajes
  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [selectedUserId, chats]);

  // Función para manejar el envío de un nuevo mensaje
  const handleMessageSubmit = (message: string) => {
    // Verifica que haya un usuario seleccionado y que el mensaje no esté vacío
    if (!selectedUserId || !message.trim()) {
      return;
    }

    // Crea un nuevo objeto de mensaje con la hora actual
    const newMessage = {
      id: Date.now(), // Usa el timestamp como ID único
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSent: true, // Indica que este mensaje fue enviado por el usuario actual
    };

    // Actualiza el estado de los chats
    setChats((prevChats) => {
      return prevChats.map((chat) => {
        if (chat.id === selectedUserId) {
          return {
            ...chat,
            messages: [...(chat.messages), newMessage],
            lastMessage: message, 
            time: newMessage.time, 
          };
        }
        return chat;
      });
    });
  };

  // Obtiene el usuario seleccionado
  const selectedUser = useMemo(
    () => chats.find((chat) => chat.id === selectedUserId),
    [chats, selectedUserId]
  );


  return (
    <MainContainer>
      <SideNavBarContainer>
        <SideNavBar initialChats={chats} onSelectUser={handleSelectUser} />
      </SideNavBarContainer>
      {selectedUser && (
        <ChatAreaContainer>
          <Header
            name={selectedUser.name}
            role={selectedUser.role}
            imageUrl={selectedUser.imageUrl}
          />
          <ChatContainer id="chat-container">
            { selectedUser.messages.length > 0 ? (
              selectedUser.messages.map((msg) => (
                <ChatBubble
                  key={msg.id}
                  message={msg.text}
                  time={msg.time}
                  isSent={msg.isSent}
                  imageUrl={selectedUser.imageUrl}
                />
              ))
            ) : (
              <p style={{height:"100%",width:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
                Inicia una nueva conversacion!
              </p>
            )}
          </ChatContainer>
          <InputContainer>
            <Input onSubmit={handleMessageSubmit} />
          </InputContainer>
        </ChatAreaContainer>
      )}
    </MainContainer>
  );
};

export default Home;