import React from "react";

interface ModalProps {
    children: React.ReactNode,
    isOpen: boolean
}

function Modal(props: ModalProps){

    return(
        <>
            {props.isOpen && (
                <div className="modal">
                    {props.children}
                </div>
            )}
        </>
    )
}

export default Modal;