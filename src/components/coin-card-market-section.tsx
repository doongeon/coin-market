import styled from "styled-components";

const CoinMarketContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.cardColor};
  gap: 1px;
  border: 2px solid ${(props) => props.theme.ringColor};
  border-radius: 10px;
  overflow: hidden;
  text-transform: uppercase;
  & > * {
    background-color: white;
    width: 50%;
    text-align: center;
    padding: 10px 0;
  }
`;
export default function CoinMarket() {
  return (
    <>
      <CoinMarketContainer>
        <span>chart</span>
        <span>price</span>
      </CoinMarketContainer>
      {}
    </>
  );
}
