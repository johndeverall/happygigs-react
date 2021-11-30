import React from "react";
import Special from "./Special";
import SpecialServiceClient from "../spi/SpecialServiceClient"





function SpecialList(){
    return (
        <React.Fragment>

            <hr/>
            {SpecialServiceClient.specials.map(special =>

                <Special description={special.description} startTime={special.startTime} finishTime={special.finishTime} latitude={special.latitude} longitude={special.longitude} />
            )}

        </React.Fragment>


    );
}

export default SpecialList;
