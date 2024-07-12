import styled from "styled-components";
import Image from "next/image";

interface TalkBubbleProps {
  $sent?: boolean;
}

export const Container = styled.div<TalkBubbleProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.$sent ? "flex-end" : "flex-start")};
  padding: 5px 0;
  position: relative;
  margin: 5px 0;
  @media (max-width: 768px) {
  padding: 5px 10px;
  }
`;

export const TalkBubble = styled.div<TalkBubbleProps>`
  margin: 10px;
  display: inline-block;
  position: relative;
  width: auto;
  min-width: 30vh;
  max-width: 40vh;
  padding: 15px;
  background-color: ${(props) => (props.$sent ? "#fceded" : "#ffffff")};
  border-radius: 10px;
  order: ${(props) => (props.$sent ? 1 : 2)};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${(props) =>
    props.$sent
      ? "0px 1px 0px rgba(0, 0, 0, 0.2);"
      : "1px 1px 1px rgba(0, 0, 0, 0.2);"};
  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const Triangle = styled.div<TalkBubbleProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  
  ${(props) =>
    props.$sent
      ? `
      right: -16px;
      top: 0px;
      border-width: 0px 0 20px 20px;
      border-color: transparent transparent transparent ${
        props.$sent ? "#fceded" : "white"
      };
    `
      : `
      left: -15px;
      top: 0px;
      border-width: 20px 0px 0 20px;
      border-color: ${
        props.$sent ? "#fceded" : "white"
      } transparent transparent transparent;
    `}
`;

export const TalkText = styled.div<TalkBubbleProps>`
  color: ${(props) => (props.$sent ? "#000000" : "#666666")};
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TimeText = styled.div<TalkBubbleProps>`
  font-size: 0.8em;
  color: #999;
  position: absolute;
  top: -20px;
  ${(props) => (props.$sent ? "left: 10px;" : "right: 10px;")}
`;

export const ImageStyled = styled(Image)<{ $sent?: boolean }>`
  border-radius: 50%;
  order: ${(props) => (props.$sent ? 2 : 1)};
  margin: ${(props) => (props.$sent ? "0 15px 0 10px" : "0 10px 0 0")};
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;