import { useEffect } from "react";
import { Candle } from "./coin-card-market-section";
import ApexCharts from "apexcharts";
import formatNumber from "../utils/formatNumber";

interface ChartProps {
  coinId: string;
  isPending: boolean;
  candles: Candle[];
}

export default function Chart({ coinId, isPending, candles }: ChartProps) {
  useEffect(() => {
    if (candles) {
      const options = {
        chart: {
          type: "line",
        },
        series: [
          {
            name: "price",
            data: candles?.slice(0, 10).map((candle) => candle.high),
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

      const chart = new ApexCharts(
        document.querySelector(`#chart_${coinId}`),
        options
      );

      chart.render();
    }
  }, [coinId, candles]);

  return <div id={`chart_${coinId}`} />;
}
