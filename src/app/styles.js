import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 30vw 1fr;
  grid-template-rows: 100vh;
  background-color: #e9e9e9;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    grid-template-columns: 40vw 1fr;
      overflow-x: hidden;
  }
`;

export const SideNavBarContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  overflow-y: auto;
`;

export const ChatAreaContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
      overflow-y: hidden;
  }
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-left: 50px;
  padding-right: 10%;

  @media (max-width: 768px) {
    overflow-x: hidden;
    margin-left: 10px;
    margin-right: 5%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  position: sticky;
  bottom: 0;
  width: 99%;
  height: 60px;
  overflow-x: hidden;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    flex: 0.9;
    border: 2px solid #f4f4f4;
    border-radius: 12px;
    padding: 8px 12px;
    margin-right: 10px;
    height: 36px;
    background-color: #fbfbfb;
    color: #777777;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 8px 12px;
    }
  }

  button {
    padding: 8px 16px;
    background-color: #f0f0f0;
    color: #7f7f7f;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
    width: 100px;
    height: 36px;

    @media (max-width: 768px) {
      width: 80px;
      font-size: 12px;
    }
  }
`;
