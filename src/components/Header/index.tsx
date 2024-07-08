import React from "react";
import {
  HeaderContainer,
  AvatarImage,
  Name,
  Role,
  TextContainer,
} from "./styles";

interface Props {
  name: string;
  role: string;
  imageUrl: string;
}

const Header = ({ name, role, imageUrl }: Props) => {
  return (
    <HeaderContainer>
      {imageUrl && (
        <AvatarImage
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          layout="fixed"
        />
      )}
      <TextContainer>
        <Name>{name}</Name>
        {role && <Role>{role}</Role>}
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
