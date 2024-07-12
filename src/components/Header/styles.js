import styled from "styled-components";
import Image from "next/image";

export const HeaderContainer = styled.div`
  background-color: white;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 70px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    height: 15vh;
  }
`;

export const AvatarImage = styled(Image)`
  border-radius: 50%;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-right: 20px;
    height: 50px;
    width: 50px;
  }
`;

export const TextContainer = styled.div`
  margin: 0;
`;

export const Name = styled.p`
  margin: 0;
  padding-bottom: 5px;
  font-size: 2rem;
  font-weight: 500;
  color: #3c3d3f;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    min-width: 190px;
  }
`;

export const Role = styled.p`
  margin: 0;
  color: #787878;
  font-size: 1.4rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 190px;
  }
`;
