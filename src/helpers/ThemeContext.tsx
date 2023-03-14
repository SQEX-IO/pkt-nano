import React, {createContext, useEffect, useState} from "react";
import fetchCurrentTheme from "./fetchCurrentTheme";

const ThemeContext = createContext({
    current: fetchCurrentTheme(),
    setTheme: (value: string) => {}
})

export default ThemeContext;