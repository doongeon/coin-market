import styled from "styled-components";
import getCoinImgUrl from "../utils/getCoinImgUrl";
import { URL_NO_ICON_IMG } from "../utils/constants";

interface CoinIconProps {
  coinSymbol: string | undefined;
  size?: { w: number; h: number };
}

export default function CoinIcon({ coinSymbol, size }: CoinIconProps) {
  const onErrorImg = (e: any) => {
    e.target.src = URL_NO_ICON_IMG;
  };

  return (
    <img
      src={getCoinImgUrl(coinSymbol ? coinSymbol.toLowerCase() : URL_NO_ICON_IMG)}
      width={size?.w}
      height={size?.h}
      onError={onErrorImg}
      alt=""
    />
  );
}
