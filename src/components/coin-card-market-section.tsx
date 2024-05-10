import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinMarket } from "../utils/api";
import { Route, Switch } from "react-router-dom";
import Chart from "./Chart";
import Button from "./Button";
import CandleChart from "./Candles";

interface CoinMarketProps {
  coinId: string;
}

export interface Candle {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const CoinMarketContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  & > * {
    border: 2px solid ${(props) => props.theme.ringColor};
    border-radius: 10px;
    width: 40%;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const ChartContainer = styled.div`
  div {
    text-align: center;
  }
`;

export default function CoinMarket({ coinId }: CoinMarketProps) {
  const {
    isPending,
    error,
    data: candles,
  } = useQuery<Candle[]>({
    queryKey: ["fetchCoinMarket", coinId],
    queryFn: () => fetchCoinMarket(coinId),
  });

  return (
    <>
      <CoinMarketContainer>
        <Button to={`/coin/${coinId}/chart`} text="라인" />
        <Button to={`/coin/${coinId}/candles`} text="캔들" />
      </CoinMarketContainer>
      <ChartContainer>
        <Switch>
          <Route path={`/coin/${coinId}/chart`}>
            {isPending ? (
              <div>로딩중</div>
            ) : Array.isArray(candles) ? (
              <Chart coinId={coinId} isPending={isPending} candles={candles} />
            ) : (
              <div>자료가 없어요...</div>
            )}
          </Route>
          <Route path={`/coin/${coinId}/candles`}>
            {isPending ? (
              <div>로딩중</div>
            ) : Array.isArray(candles) ? (
              <CandleChart
                coinId={coinId}
                isPending={isPending}
                candles={candles}
              />
            ) : (
              <div>자료가 없어요...</div>
            )}
          </Route>
        </Switch>
      </ChartContainer>
    </>
  );
}
