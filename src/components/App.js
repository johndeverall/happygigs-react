import React from "react";
import Header from "./Header";
import SpecialList from "./SpecialList";
import Footer from "./Footer";

function App(){
  return (
      <React.Fragment>
        <Header/>
        <SpecialList/>
        <Footer/>
      </React.Fragment>
  );
}

export default App;