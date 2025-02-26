import React, {createContext, ReactNode, useState} from "react";

export interface LoginContextInterface {
    isLogin: boolean,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<LoginContextInterface | null>(null);


export const LoginProvider = ({children}: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </LoginContext.Provider>
    );
}