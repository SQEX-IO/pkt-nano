import React, {useContext} from "react";

import {CPUWidget, EncryptionsWidget, PoolsWidget, VPNWidget, WalletWidget, WiFiSettingsWidget} from "./components";
import {ThemeContext} from "../../helpers";

function Main(){

    const theme = useContext(ThemeContext);

    return(
        <>
            {theme?.current && (
                <div className="content">
                    <div className="stats-card-grid">
                        <VPNWidget/>

                        <CPUWidget/>

                        <PoolsWidget/>

                        <WalletWidget/>

                        <WiFiSettingsWidget/>

                        <EncryptionsWidget/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Main;