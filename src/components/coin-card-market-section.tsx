import styled from "styled-components";
import ApexCharts from "apexcharts";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinMarket } from "../utils/api";
import { useEffect } from "react";

interface CoinMarketProps {
  coinId: string;
}

interface Candle {
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

export default function CoinMarket({ coinId }: CoinMarketProps) {
  const {
    isPending,
    error,
    data: candles,
  } = useQuery<Candle[]>({
    queryKey: ["fetchCoinMarket"],
    queryFn: () => fetchCoinMarket(coinId),
  });

  useEffect(() => {
    if (!isPending) {
      const options = {
        chart: {
          type: "line",
        },
        series: [
          {
            name: "price",
            data: candles?.map((candle) => candle.high),
          },
        ],
        xaxis: {
          
        },
        fill: {
          type: "gradient",

          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [
              {
                offset: 0,
                color: "#EB656F",
                opacity: 1,
              },
              {
                offset: 20,
                color: "#FAD375",
                opacity: 1,
              },
              {
                offset: 60,
                color: "#61DBC3",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#95DA74",
                opacity: 1,
              },
            ],
          },
        },
        grid: {
          show: false,
        },
      };

      const chart = new ApexCharts(document.querySelector("#chart"), options);

      chart.render();
    }
  }, [candles]);

  return (
    <>
      <CoinMarketContainer>
        <span>차트</span>
        <span>호가</span>
      </CoinMarketContainer>
      <div id="chart"></div>
    </>
  );
}
