import { useQuery } from "@tanstack/react-query";
import { fetchCoinPrice } from "../utils/api";
import styled from "styled-components";
import formatNumber from "../utils/formatNumber";

interface CoinPriceProps {
  coinId: string;
}

interface CryptoCurrencyPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const CoinPriceContainer = styled.div`
  width: 80%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.ringColor};
  border-radius: 15px;
  gap: 20px;
  margin: 0 auto;
  height: 60px;
  transition: linear 0.5s;
  & > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;

    & > span:first-child {
      font-size: 16px;
    }
  }
`;

export default function CoinPrice({ coinId }: CoinPriceProps) {
  const {
    isPending,
    error,
    data: coinPrice,
  } = useQuery<CryptoCurrencyPrice>({
    queryKey: ["fetchCoinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
    refetchInterval: 20000,
  });

  console.log(error);

  return (
    <CoinPriceContainer>
      <div>
        <span>최대 발행량</span>
        <span>
          {isPending
            ? "로딩..."
            : formatNumber(coinPrice?.max_supply!) === "0"
            ? "??"
            : formatNumber(coinPrice?.max_supply!)}
        </span>
      </div>
      <div>
        <span>가격</span>
        <span>
          {isPending
            ? "로딩..."
            : "$" + formatNumber(coinPrice?.quotes.USD.price!).slice(0, 7)}
        </span>
      </div>
    </CoinPriceContainer>
  );
}
