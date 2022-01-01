import React from "react";
import './Menu.css';
import MrHappy from './mrhappy.svg';

// When the user scrolls down 50px from the top of the document, shrink Mr. Happy
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mrhappy").style.height = "0px";
    document.getElementById("mrhappy").style.paddingTop = "50px";

  } else {
    document.getElementById("mrhappy").style.height = "100px";
    document.getElementById("mrhappy").style.paddingTop = "0px";
  }
} 

function Menu(props) {
    return (
  <nav>        
      <input id="responsive-menu" type="checkbox"/>
              <label for="responsive-menu">
    <img id="mrhappy" src={MrHappy}  alt="MrHappy"/>

          <span id="menu-icon"></span></label>
        <div id="overlay"></div>
        <ul>
            <li><a href="/">Add to home screen</a></li>
            <li><a href="/">Submit a special</a></li>
            <li><a href="/">Enable my location</a></li>           
            <li><a href="/">HG Manifesto</a></li>
            <li><a href="mailto:support@happygigs.co.nz">Contact</a></li>
        </ul>

</nav>
    );
}

export default Menu;