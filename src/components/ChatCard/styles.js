import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15%;
  color: white;
  border-bottom: 1px solid #878787;
  background-color: #191a1e;
  padding-inline: 16px;
  padding-block: 16px;
  cursor: pointer;
  &.selected {
    border-right: 5px solid #c10000;
    background-color: #3c3d3f;
  }


  @media (max-width: 1024px) {
    height:30%;
  }
    @media (max-width: 768px) {
    height: 10%;
`;

export const CardUserDataContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ChatTitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ChatImage = styled(Image)`
  border-radius: 50%;
  margin-right: 16px;
`;

export const ChatDetails = styled.div`
  flex: 1;
`;

export const UserTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 10px;
  width: 100%;
  padding-bottom: 10px;
`;

export const ChatName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const LastMessage = styled.p`
  color: #8b8b8b;
  margin: 0;
  width: 200px;
`;

export const Time = styled.p`
  color: #707071;
  margin: 0;
  text-align: right;
  font-size: 13px;
`;
