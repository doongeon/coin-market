import styled from "styled-components";

interface CoinInfoProps {
  rank: number;
  symbol: string;
  open_source: boolean;
}

const CoinInfoContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 1px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.cardColor};
  color: black;
  font-size: 14px;
  border: 2px solid ${(props) => props.theme.ringColor};
  border-radius: 10px;
  overflow: hidden;
  & > div {
    width: 33%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    text-align: center;
    padding: 10px 0px;
    & > span:first-child {
      height: 30px;
      display: flex;
      align-items: center;
    }
    & > span:last-child {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

export default function CoinInfo({ rank, symbol, open_source }: CoinInfoProps) {
  return (
    <CoinInfoContainer>
      <div>
        <span>rank</span>
        <span>{rank}</span>
      </div>
      <div>
        <span>symbol</span>
        <span>{symbol}</span>
      </div>
      <div>
        <span>open source</span>
        <span>{open_source ? "yes" : "no"}</span>
      </div>
    </CoinInfoContainer>
  );
}
