import { BASE_URL_GET_COIN_MARKET, BASE_URL_GET_COIN } from "./constants";

export async function fetchCoins() {
  return await (await fetch(`${BASE_URL_GET_COIN}/coins`)).json();
}

export async function fetchCoin(coinId: string) {
  return await (await fetch(`${BASE_URL_GET_COIN}/coins/${coinId}`)).json();
}

export async function fetchCoinPrice(coinId: string) {
  return await (await fetch(`${BASE_URL_GET_COIN}/tickers/${coinId}`)).json();
}

export async function fetchCoinMarket(coinId: string) {
  return await (
    await fetch(`${BASE_URL_GET_COIN_MARKET}/?coinId=${coinId}`)
  ).json();
}
