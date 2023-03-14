import React, {useContext, useEffect} from "react";
import {fetchCurrentTheme, ThemeContext} from "../helpers";
import {Toggle} from "./index";
import {useForm} from "react-hook-form";

function ThemePicker() {

    const theme = useContext(ThemeContext);

    function setDarkmode(settingTo: string){
        if(settingTo === theme.current){
            return;
        }

        if(theme.current === "dark"){
            theme.setTheme("light");
        } else {
            theme.setTheme("dark");
        }
    }

    useEffect(() => {
        if(theme.current){
            document.documentElement.setAttribute('data-theme', theme.current);
            window.localStorage.setItem('data-theme', theme.current);
        }
    }, [theme.current])

    const {register, watch} = useForm<{
        themeTogglePosition: boolean,
    }>({
        defaultValues: {
            themeTogglePosition: fetchCurrentTheme() === "dark"
        }
    })

    const themeTogglePosition = watch("themeTogglePosition");
    useEffect(() => {
        setDarkmode(themeTogglePosition ? "dark" : "light");
    }, [ themeTogglePosition ])

    return(
        <div className="flex justify-end">
            <Toggle
                formRegister={register}
                fieldName="themeTogglePosition"
                label={"Dark mode"}
                className="mt-4 mr-4"
            />
        </div>
    )
}

export default ThemePicker;