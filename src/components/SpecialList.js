import React from "react";
import Special from "./Special";
import getSpecials from "../spi/SpecialServiceClient"

async function SpecialList() {
    return (
        <React.Fragment>

            <hr/>
            {
                (await getSpecials()).map(special =>
                    <Special description={special.description} startTime={special.startTime}
                             finishTime={special.finishTime} />
                )}

        </React.Fragment>
    );
}

export default SpecialList;
