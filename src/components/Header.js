import React from "react";

import './Header.css';

function Header(){
    return (
        <div class="select-transport">
        <form class="mode">
            <div><input type="radio" id="walk" name="speed" onclick="tabulate(), searchForCountdowns()" checked="checked"></input>
            <label for="walk">Walk</label></div>
            <div><input type="radio" id="drive" name="speed" onclick="tabulate(), searchForCountdowns()"></input>
            <label for="drive">Drive</label></div>
          </form>
        </div>
    );
}

export default Header;