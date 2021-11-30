import React from "react";

function Special(props){
    return (
        <React.Fragment>
            <ul>
                <li>{props.description}</li>
                <li>{props.startTime}</li>
                <li>{props.finishTime}</li>
            </ul>
            <hr/>
        </React.Fragment>
    );
}

export default Special;