import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  background-color: #191a1e;
  width: 30vw;
  position: relative;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform: ${({ menuOpen }) =>
      menuOpen ? "translateX(0)" : "translateX(-100%)"};
    z-index: 10;
    overflow-y: auto;
  }
`;

export const TopSection = styled.div`
  height: 20vh;
  background-image: linear-gradient(
    to right,
    #c10000,
    #cb0000,
    #d50000,
    #df0000,
    #e90000,
    #ee0000,
    #f30000,
    #f80000,
    #fa0000,
    #fb0000,
    #fd0000,
    #ff0000
  );
  display: flex;
  align-items: center;
  color: white;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    height: 20vh;
    justify-content: center;
    padding-left: 0;
    width: 100%;
  }
`;

export const BottomSection = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
  height: 70%;
  width: 100%;
  background-color: #191a1e;

  @media (max-width: 1024px) {
    height: 50%;
  }

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    padding-left: 0;
  }
`;

export const CreateNew = styled.p`
  cursor: pointer;
  color: #a9aaaa;
  text-decoration: none;
  margin-top: 10px;
  background-color: #191a1e;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const HamburgerButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 20;
  background: none;
  border: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; 
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.span`
  font-size: 2rem;
  color: black;
  cursor: pointer;
  position: absolute;
`;

export const CloseIcon = styled.p`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
