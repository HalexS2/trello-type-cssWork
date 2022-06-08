import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "react-jss";
import { themeList } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "./appSlice";

function App() {
  const themeMode = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();

  const themeRef = useRef();

  const themeCreator = () => {
    switch (themeMode) {
      case "darkTheme":
        return  themeList.darkTheme;

      case "psychedelicTheme":
        return  themeList.psychedelicTheme;

      default:
        return  themeList.lightTheme;
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{}}
          onClick={() => {
            console.log("ciao Manuel ti vogliamo bene");
            dispatch(setThemeMode(themeRef.current.value));
          }}
        >
          MoonKnight
        </button>
        <label htmlFor="theme">SELECT YOUR FIGHTER</label>
        <select ref={themeRef} name="theme" id="theme">
          <option value="psychedelicTheme">Psycho</option>
          <option value="darkTheme">Dark</option>
          <option value="lightTheme">Light</option>
        </select>
      </div>
      <ThemeProvider theme={themeList[themeMode]}>
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
