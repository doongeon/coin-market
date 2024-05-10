import { useEffect } from "react";
import { Candle } from "./coin-card-market-section";
import ApexCharts from "apexcharts";
import formatNumber from "../utils/formatNumber";

interface CandleChartProps {
  coinId: string;
  isPending: boolean;
  candles: Candle[];
}

export default function CandleChart({
  coinId,
  isPending,
  candles,
}: CandleChartProps) {
  useEffect(() => {
    if (candles) {
      const options = {
        chart: {
          type: "candlestick",
        },
        series: [
          {
            data: candles
              .slice(0, 10)
              ?.map((candle) => [
                candle.time_open,
                Number(candle.open),
                Number(candle.high),
                Number(candle.low),
                Number(candle.close),
              ]),
          },
        ],
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            formatter: (value: number) => "$" + formatNumber(value),
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: true,
          },
          crosshairs: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };

      const chart = new ApexCharts(
        document.querySelector(`#candles_${coinId}`),
        options
      );

      chart.render();
    }
  }, [coinId, candles]);

  return <div id={`candles_${coinId}`} />;
}
