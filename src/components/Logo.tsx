import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleContainer = styled.h1`
  width: 100%;
  max-width: 600px;
  text-align: center;
  font-size: 3.5rem;
  color: ${(props) => props.theme.ringColor};
  font-weight: 600;
  transition: linear 0.5s;
`;

export default function Title() {
  return (
    <Link to={"/"}>
      <TitleContainer>코인 장터</TitleContainer>
    </Link>
  );
}
