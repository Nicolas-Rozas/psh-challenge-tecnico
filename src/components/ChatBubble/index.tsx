import React from "react";
import { ChatBubbleProps } from "@/types/chatTypes";
import {
  Container,
  ImageStyled,
  TalkBubble,
  TalkText,
  TimeText,
  Triangle,
} from "./styles";


const ChatBubble = ({ message, time, isSent, imageUrl }: ChatBubbleProps) => {
  return (
    <Container $sent={isSent}>
      {!isSent && (
        <ImageStyled
          src={imageUrl}
          width={50}
          height={50}
          alt="User avatar"
          $sent={false}
        />
      )}
      <TalkBubble $sent={isSent}>
        <Triangle $sent={isSent} />
        <TalkText $sent={isSent}>{message}</TalkText>
        <TimeText $sent={isSent}>{time}</TimeText>
      </TalkBubble>
      {isSent && (
        <ImageStyled
          src="/avatar-4.png"
          width={50}
          height={50}
          alt="User avatar"
          $sent={true}
        />
      )}
    </Container>
  );
};

export default ChatBubble;