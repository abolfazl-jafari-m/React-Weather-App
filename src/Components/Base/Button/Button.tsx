import {ReactNode} from "react";

interface IProps {
    children : ReactNode,
    className : string,
    type : "button" | "submit" | "reset" | undefined,
    onClick ?: ()=>void
}
function Button({onClick , type , className , children}:IProps) {
    return (
        <button onClick={onClick} type={type} className={className} >
            {children}
        </button>
    );
}

export default Button;