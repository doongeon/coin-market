import styled from "styled-components";
import CoinIcon from "./CoinIcon";

interface CoinHeaderProps {
  coinSymbol: string;
  coinName: string;
}

const CoinCardHead = styled.div``;

const IconContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const CardTitle = styled.h2`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
`;

export default function CoinHeader({ coinSymbol, coinName }: CoinHeaderProps) {
  return (
    <CoinCardHead>
      <IconContainer>
        <CoinIcon
          coinSymbol={coinSymbol.toLowerCase()}
          size={{ w: 70, h: 70 }}
        />
      </IconContainer>
      <CardTitle>{coinName}</CardTitle>
    </CoinCardHead>
  );
}
