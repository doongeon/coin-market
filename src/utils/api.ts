import { BASE_URL_COIN, URL_COINS } from "./constants";

export async function fetchCoins() {
  return await (await fetch(URL_COINS)).json();
}

export async function fetchCoin(coinId: string) {
  return await (await fetch(BASE_URL_COIN + coinId)).json();
}
