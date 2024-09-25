import './modal.scss';
import {ReactElement} from "react";

const Modal = (props: { children: ReactElement, onClose: () => void }) => {
    return (
        <div className={"overlay"} onClick={props.onClose}>
            <div className={"modal"}>
                {props.children}
                <button className={"close"} onClick={props.onClose}>X</button>
            </div>
        </div>
    );
}

export default Modal;