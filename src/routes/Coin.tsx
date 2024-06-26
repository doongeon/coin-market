import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoin } from "../utils/api";
import { CryptocurrencyDetail } from "../utils/types";
import Title from "../components/Logo";
import CoinCard from "../components/CoinCard";
import Button from "../components/Button";

export default function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  const {
    isPending,
    data: coin,
  } = useQuery<CryptocurrencyDetail>({
    queryKey: ["fetchCoinById", coinId],
    queryFn: () => fetchCoin(coinId),
  });

  return (
    <>
      <Title />
      {isPending ? (
        <div>로딩중</div>
      ) : coin ? (
        <CoinCard coin={coin} />
      ) : (
        <div>없어요</div>
      )}
      <Button to="/" text="홈" />
    </>
  );
}
