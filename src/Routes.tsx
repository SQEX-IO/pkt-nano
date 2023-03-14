import {Routes as ReactRoutes, Route} from "react-router-dom";

import {Main} from "./pages/Main";
import {Wallet} from "./pages/Wallet";

function Routes() {
    return (
        <ReactRoutes>
            {/* DEFAULT ROUTE*/}
            <Route
                path="/"
                element={<Main/>}
            />

            <Route
                path="/wallet/:id"
                element={<Wallet/>}
            />
        </ReactRoutes>
    )
}

export default Routes;