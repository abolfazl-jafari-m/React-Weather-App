import React, {createContext, ReactNode, useState} from "react";
import {WeatherInterFace} from "../Interfaces/weather.ts";

export interface WeatherContextInterFace {
    weather: WeatherInterFace | null;
    setWeather: React.Dispatch<React.SetStateAction<WeatherInterFace | null>>;
    timezone: string;
    setTimezone: React.Dispatch<React.SetStateAction<string>>
}


export const WeatherContext = createContext<WeatherContextInterFace | null>(null);

export const WeatherProvider = ({children}: { children: ReactNode }) => {
    const [weather, setWeather] = useState<WeatherInterFace | null>(null);
    const [timezone, setTimezone] = useState<string>("");

    return (
        <WeatherContext value={{weather, setWeather, timezone, setTimezone}}>
            {children}
        </WeatherContext>
    );

}