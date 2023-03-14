import React, {useId} from "react";
import {UseFormRegister} from "react-hook-form";
import classNames from "classnames";

interface ToggleProps {
    formRegister: UseFormRegister<any>,
    fieldName: string,
    label?: string,
    className?: string
}

function Toggle(props: ToggleProps){

    const toggleId = useId();

    return (
        <div className={classNames(
            "switch-holder",
            props.className
        )}>
            <span className="mr-1 text-sm">{props.label}</span>
            <div className="switch-toggle">
                <input
                    type="checkbox"
                    id={toggleId}
                    {...props.formRegister(props.fieldName)}
                />
                <label htmlFor={toggleId}/>
            </div>
        </div>
    )
}

export default Toggle;