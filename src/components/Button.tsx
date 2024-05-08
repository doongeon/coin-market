import { act } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  to?: string;
  text: string;
}

const ButtonContainer = styled.button`
  width: 100%;
  height: 35px;
  max-width: 400px;
  color: white;
  border-radius: 15px;
  font-size: 14px;
  background-color: ${(props) => props.theme.cardColor};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  & > a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Button({ to, text }: ButtonProps) {
  return to ? (
    <ButtonContainer>
      <Link to={to}>{text}</Link>
    </ButtonContainer>
  ) : (
    <ButtonContainer>{text}</ButtonContainer>
  );
}
