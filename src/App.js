import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/Header/header";
import Employess from "./components/Employees/Employess";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="app__body">
        <Header />
        <Employess />
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;
