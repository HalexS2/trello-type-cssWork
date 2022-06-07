import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "react-jss";
import { theme, darkTheme } from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log(darkMode)
  }, [darkMode]);
  return (
    <div>
      <button
        onClick={() => {
          console.log("ciao Manuel ti vogliamo bene")
          setDarkMode(!darkMode);
        }}
      >
        MoonKnight
      </button>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Router basename="/">
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

const AppRoutes = () => {
  const myRoutes = useRoutes(routes);
  return myRoutes;
};

export default App;
