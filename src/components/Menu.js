import React from "react";

function Menu(props) {
    return (
        <React.Fragment>
            <nav>
                <input id="responsive-menu" type="checkbox"/>
                <label htmlFor="responsive-menu">
                    <img id="mrhappy" src="mrhappy.svg"/>

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
        </React.Fragment>
    );
}
