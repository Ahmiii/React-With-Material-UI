import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/Header/header";
import PageHeader from "./components/PageHeader/pageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="app__body">
        <Header />
        <PageHeader
          title="hello"
          subtitle="hello"
          icon={<PeopleOutlineIcon />}
        />
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;
