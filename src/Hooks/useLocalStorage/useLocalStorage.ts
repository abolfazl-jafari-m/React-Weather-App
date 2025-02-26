import {useEffect, useState} from "react";


export default function useLocalStorage(key :string, initialValue :any){
    const [value ,setValue] = useState(()=>{
      return  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)??"[]") : initialValue
    });
    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    }, [value , key])

    return [value , setValue];
}