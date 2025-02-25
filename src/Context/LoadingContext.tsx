import React ,{createContext, ReactNode, useState} from "react";

export interface LoadingContextInterface {
    isLoading : boolean,
    setIsLoading : React.Dispatch<React.SetStateAction<boolean>>
}
export  const LoadingContext = createContext<LoadingContextInterface | null>(null);

export const LoadingProvider = ({children} : {children : ReactNode}) =>{
    const [isLoading , setIsLoading] = useState<boolean>(true);
    return(
      <LoadingContext value={{isLoading, setIsLoading}}>
          {children}
      </LoadingContext>
    );
}