import React from "react";
import './App.css';
import Header from "./components/header.js";
import Main from "./components/Main.js";
import Section from "./components/Section";
import Contact from "./components/contact.js";
import CardContainer from "./components/CardContainer.js";
// import BgImg from "./components/pexels-pixabay-356056.jpg"
 
function App(){
  return(
    <div className="App_con">
      
      <Header />
      
      
      <div className="intro">
      <Main />
      </div>
      
      
      <Section />
      <CardContainer />
      <div className="contactMe">
        <Contact />
      </div>
      
    </div>
  );
}

export default App;