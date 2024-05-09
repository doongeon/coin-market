import styled from "styled-components";

interface CoinDescriptionProps {
  description: string;
}

const CoinDescriptionContainer = styled.p`
  width: 100%;
  max-width: 450px;
  margin: auto;
  line-height: 110%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  > h3 {
    font-size: x-large;
    font-weight: bolder;
  }
`;

export default function CoinDescription({ description }: CoinDescriptionProps) {
  return (
    <CoinDescriptionContainer>
      {description !== "" ? (
        <>
          <h3>코인 정보</h3>
          <p>{description}</p>
        </>
      ) : (
        <p>no description</p>
      )}
    </CoinDescriptionContainer>
  );
}
