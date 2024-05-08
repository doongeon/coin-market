import styled from "styled-components";
import CoinInfo from "./coin-card-Info";
import CoinDescription from "./coin-card-description";
import CoinHeader from "./coin-card-header";
import CoinMarket from "./coin-card-market-section";
import { CryptocurrencyDetail } from "../utils/types";

interface CoinCardProps {
  coin: CryptocurrencyDetail;
}

const CoinCardContainer = styled.div`
  width: 95%;
  padding: 0 10px;
  padding-bottom: 5vh;
  max-width: 600px;
  border: 2px solid ${(props) => props.theme.ringColor};
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <CoinCardContainer>
      <CoinHeader coinName={coin?.name} coinSymbol={coin?.symbol} />
      <CoinInfo
        rank={coin?.rank}
        symbol={coin?.symbol}
        open_source={coin?.open_source}
      />
      <CoinDescription description={coin?.description} />
      <CoinMarket />
    </CoinCardContainer>
  );
}
