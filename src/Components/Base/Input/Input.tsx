
interface IProps {
    type : string,
    className : string,
    value ?: string,
    name ?: string,
    onChange ?: ()=>void,
    placeholder :string
}
function Input({type , className, value , name , onChange ,placeholder} : IProps) {
    return (
        <input type={type} className={className} value={value} name={name} onChange={onChange}  placeholder={placeholder}/>
    );
}

export default Input;