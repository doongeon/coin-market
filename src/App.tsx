import styled from "styled-components";
import Nav from "./router";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 100px 20px 100px 20px;
  margin: auto;
`;

function App() {
  return (
    <Container className="App">
      <Nav />
    </Container>
  );
}

export default App;
