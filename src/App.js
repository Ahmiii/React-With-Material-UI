import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/Header/header";
import "./App.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <CssBaseline />
    </div>
  );
}

export default App;
