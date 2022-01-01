import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import SpecialList from "./SpecialList";
import End from "./End";
import Footer from "./Footer";
import './App.css';

function App(){
  return (
      <React.Fragment>
        <Menu/>
        <div id="container">
        <Header/>
        <SpecialList/>
        <End/>
        <Footer/></div>
      </React.Fragment>
  );
}

export default App;