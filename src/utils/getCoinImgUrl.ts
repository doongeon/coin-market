import { BASE_URL_COIN_IMG } from "./constants";

export default function getCoinImgUrl(coinSymbol: string) {
  return BASE_URL_COIN_IMG + coinSymbol;
}
