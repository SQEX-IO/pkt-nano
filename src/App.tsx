import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import {ThemePicker} from "./components";
import {ThemeContext} from "./helpers";
import fetchCurrentTheme from "./helpers/fetchCurrentTheme";

function App() {

    const [theme, setTheme] = useState<string>(fetchCurrentTheme());

    return(
        <BrowserRouter>
            <ThemeContext.Provider value={{current: theme, setTheme}}>
                <div id="wrapper">
                    <ThemePicker/>
                    <Routes/>
                </div>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

export default App;
