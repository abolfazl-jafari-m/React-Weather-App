import {ChangeEvent, KeyboardEvent} from "react";

interface IProps {
    type : string,
    className : string,
    value ?: string,
    name ?: string,
    onChange ?: (e : ChangeEvent<HTMLInputElement>)=>void,
    placeholder :string,
    onKeyDown ?: (e : KeyboardEvent<HTMLInputElement>)=>void,
    defaultValue ?: string
}
function Input({type , className, value , name , onChange ,placeholder , onKeyDown ,defaultValue} : IProps) {
    return (
        <input type={type} className={className} value={value} name={name} onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} onKeyDown={onKeyDown}/>
    );
}

export default Input;