import styled from "styled-components";

interface ThemeToggleBtnProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeTogglerContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: end;
  margin-bottom: -20px;
`;

const ThemeToggler = styled.button`
  border: 2px solid ${(props) => props.theme.ringColor};
  color: ${props => props.theme.textColor};
  background-color: inherit;
  width: 25%;
  max-width: 70px;
  height: 25px;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 15px;
  transition: linear 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default function ThemeToggleBtn({
  toggleTheme,
  isDark,
}: ThemeToggleBtnProps) {
  return (
    <ThemeTogglerContainer>
      <ThemeToggler
        onClick={toggleTheme}
        style={{ color: isDark ? "white" : "black" }}
      >
        {isDark ? "라이트" : "다크"}
      </ThemeToggler>
    </ThemeTogglerContainer>
  );
}
