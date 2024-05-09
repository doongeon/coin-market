import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../utils/api";
import styled from "styled-components";
import { Cryptocurrency } from "../utils/types";
import CoinIcon from "./CoinIcon";
import { Link } from "react-router-dom";

const CoinList = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const CoinConatainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: 70px;
  cursor: pointer;
  & > a {
    height: 100%;
    padding: 0 20px;
    max-width: 350px;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 15px;
    display: flex;
    gap: 15px;
    align-items: center;
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
    transition: linear 0.3s;
    &:hover {
      background-color: ${(props) => props.theme.ringColor};
    }
  }
`;

export default function Coins() {
  const {
    isPending,
    error,
    data: coins,
  } = useQuery<Cryptocurrency[]>({ queryKey: ["coins"], queryFn: fetchCoins });

  return (
    <CoinList>
      {isPending ? (
        <div>로딩중</div>
      ) : (
        <>
          {coins?.slice(0, 20).map((coin) => (
            <CoinConatainer key={coin.id}>
              <Link to={`/coin/${coin.id}`}>
                <CoinIcon coinSymbol={coin.symbol} size={{ w: 40, h: 40 }} />
                <span>{coin.name}</span>
              </Link>
            </CoinConatainer>
          ))}
        </>
      )}
    </CoinList>
  );
}
