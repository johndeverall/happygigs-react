import React from "react";
import Special from "./Special";
import data from "../spi/SpecialServiceClient"
import './SpecialList.css';
import Heart from './heart.svg';
import Pin from './pin.svg';


function SpecialList(){
    return (
        <React.Fragment>

<div id="flex-container">
            {data.specials
                .map(special =>
                <Special description={special.description} startTime={special.startTime} finishTime={special.finishTime} latitude={special.latitude} longitude={special.longitude} />
            )}
</div>
        </React.Fragment>
    );
}

export default SpecialList;
