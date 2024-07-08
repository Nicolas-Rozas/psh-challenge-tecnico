import React from "react";
import {
  CardContainer,
  ChatImage,
  ChatDetails,
  ChatName,
  LastMessage,
  Time,
  CardUserDataContainer,
  ChatTitleSubtitleContainer,
  UserTimeContainer,
} from "./styles";
import { ChatCardsProps } from "@/types/chatTypes";

const ChatCard = ({
  name,
  lastMessage,
  time,
  imageUrl,
  selected = false,
  onClick,
}: ChatCardsProps) => {
  return (
    <CardContainer onClick={onClick} className={selected ? "selected" : ""}>
      <ChatImage width={60} height={60} src={imageUrl} alt={name} />
      <CardUserDataContainer>
        <ChatDetails>
          <ChatTitleSubtitleContainer>
            <UserTimeContainer>
              <ChatName>{name}</ChatName>
              <Time>{time}</Time>
            </UserTimeContainer>
            <LastMessage>{lastMessage}</LastMessage>
          </ChatTitleSubtitleContainer>
        </ChatDetails>
      </CardUserDataContainer>
    </CardContainer>
  );
};

export default ChatCard;
