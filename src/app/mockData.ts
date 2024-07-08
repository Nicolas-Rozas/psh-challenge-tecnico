import { UserDetails } from "@/types/chatTypes";

export const initialChats: UserDetails[] = [
  {
    id: 1,
    name: "Luciana Gutierrez",
    lastMessage: "Si tengo alguna otra novedad te comento. Gracias!",
    time: "10:20 AM",
    imageUrl: "/avatar-2.png",
    role: "Product Manager",
    messages: [
      {
        id: 1,
        text: "Hola Luciana alguna otra novedad?, ¿entre qué horarios podrás tener hoy la reunión?",
        time: "10:00 AM",
        isSent: true,
      },
      {
        id: 2,
        text: "Si tengo alguna otra novedad te comento. Gracias!",
        time: "10:20 AM",
        isSent: false,
      },
    ],
  },
  {
    id: 2,
    name: "Micaela Alvarez",
    lastMessage: "Dale, agende la meeting para hoy a las 14hs",
    time: "10:15 AM",
    imageUrl: "/avatar-1.png",
    role: "Marketing Manager",
    messages: [
      {
        id: 1,
        text: "Hola Jhon, ¿entre qué horarios podrás tener hoy la reunión?",
        time: "10:00 AM",
        isSent: false,
      },
      {
        id: 2,
        text: "Hola Micaela! Muy bien. Yo puedo de 10 a 17hs.",
        time: "10:05 AM",
        isSent: true,
      },
      {
        id: 3,
        text: "Dale, Agende la reunión para hoy a las 14hs",
        time: "10:15 AM",
        isSent: false,
      },
    ],
  },
  {
    id: 3,
    name: "Manuel Hoffman",
    lastMessage: "Gracias a vos!.",
    time: "9:37 AM",
    imageUrl: "/avatar-3.png",
    role: "Developer",
    messages: [
      {
        id: 1,
        text: "Hola Manuel, gracias por la meet de hoy",
        time: "10:00 AM",
        isSent: true,
      },
      {
        id: 2,
        text: "Gracias a vos!",
        time: "9:37 AM",
        isSent: false,
      },
    ],
  },
];
