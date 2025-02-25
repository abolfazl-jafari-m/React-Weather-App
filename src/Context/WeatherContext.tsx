import React, {createContext, ReactNode, useState} from "react";
import {WeatherInterFace} from "../Interfaces/weather.ts";

export interface WeatherContextInterFace {
    weather: WeatherInterFace | null;
    setWeather: React.Dispatch<React.SetStateAction<WeatherInterFace | null>>;
}



export const WeatherContext = createContext<WeatherContextInterFace | null>(null);

export const WeatherProvider = ({children}: { children: ReactNode }) => {
    const [weather, setWeather] = useState<WeatherInterFace | null>(null);

    return (
        <WeatherContext value={{weather, setWeather}}>
            {children}
        </WeatherContext>
    );

}