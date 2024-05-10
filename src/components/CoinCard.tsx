import styled from "styled-components";
import CoinInfo from "./coin-card-Info";
import CoinDescription from "./coin-card-description";
import CoinHeader from "./coin-card-header";
import CoinMarket from "./coin-card-market-section";
import { CryptocurrencyDetail } from "../utils/types";
import CoinPrice from "./coin-card-price";

interface CoinCardProps {
  coin: CryptocurrencyDetail;
}

const CoinCardContainer = styled.div`
  width: 95%;
  padding: 0 10px;
  padding-bottom: 25px;
  max-width: 600px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: linear 0.5s;
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
      <CoinPrice coinId={coin.id} />
      <CoinMarket coinId={coin.id} />
    </CoinCardContainer>
  );
}
