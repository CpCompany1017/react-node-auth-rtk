import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import { useTheme } from "./hooks/useTheme";
import Toggle from "./components/Toggle";
import Toast from "./components/Toast";
import Routes from "./routes/Routes";

function App({ children }) {
  const [themeMode, themeIcon, themeToggler] = useTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Toggle onClick={themeToggler}>{themeIcon}</Toggle>
        <Routes />
        {children}
        <Toast />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
