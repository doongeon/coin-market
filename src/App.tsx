import styled, { ThemeProvider } from "styled-components";
import Nav from "./router";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import ThemeToggleBtn from "./components/ThemeToggleBtn";

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
  min-height: 100vh;
  height: max-content;
  color: ${(props) => props.theme.textColor};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 100px 20px 100px 20px;
  margin: auto;
  transition: linear 0.5s;
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((cur) => !cur);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container className="App">
        <ThemeToggleBtn toggleTheme={toggleTheme} isDark={isDark} />
        <Nav />
      </Container>
    </ThemeProvider>
  );
}

export default App;
