export interface Props {
  initialChats?: UserDetails[];
  onSelectUser: (user: UserDetails) => void;
}
export interface UserDetails {
  id: string | number;
  name: string;
  lastMessage?: string;
  time: string;
  imageUrl: string;
  role: string;
  messages: Message[];
}

export interface ChatCardsProps {
  name: string;
  lastMessage: string;
  time: string;
  imageUrl: string;
  selected?: boolean | null;
  onClick?: () => void;
}

export interface Message {
  id: number;
  text: string;
  time: string;
  isSent: boolean;
}

export interface ChatBubbleProps {
  message: string;
  time: string;
  isSent?: boolean;
  imageUrl: string;
}
