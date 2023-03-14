import React from "react";
import classNames from "classnames";

interface CardProps {
    children: React.ReactNode
    className?: string
    style?: any
    onClick?: any
}

function Card(props: CardProps){
    return (
        <div
            className={classNames(
                "card",
                props.className
            )}
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default Card;