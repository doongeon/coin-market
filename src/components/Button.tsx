import { act } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  to?: string;
  text: string;
}

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 170px;
  height: 35px;
  color: ${(props) => props.theme.bg};
  background-color: ${(props) => props.theme.ringColor};
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
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
