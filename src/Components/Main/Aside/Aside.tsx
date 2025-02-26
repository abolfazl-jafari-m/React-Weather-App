import Input from "../../Base/Input/Input.tsx";
import {KeyboardEvent, useContext, useEffect, useState} from "react";
import {getWeather} from "../../../Services/Weather.ts";
import {WeatherContext, WeatherContextInterFace} from "../../../Context/WeatherContext.tsx";
import moment from "moment-timezone"
import humidity from "/images/humidity.svg";
import sunset from "/images/sunset.svg";
import sunrise from "/images/sunrise.svg";
import celsius from "/images/celsius.svg";
import wind from "/images/wind.svg";
import compass from "/images/compass.svg";
import thermometerColder from "/images/thermometer-colder.svg";
import thermometerWarmer from "/images/thermometer-warmer.svg";
import {LoadingContext, LoadingContextInterface} from "../../../Context/LoadingContext.tsx";
import useUserLocation from "../../../Hooks/useUserLocation/useUserLocation.tsx";
import cityTimezone from "city-timezones";


function Aside() {
    const {weather, setWeather} = useContext(WeatherContext) as WeatherContextInterFace
    const {setIsLoading} = useContext(LoadingContext) as LoadingContextInterface
    const [timezone, setTimezone] = useState<string>("");
    const city = useUserLocation();
    const searchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setIsLoading(true);
            getWeather((e.target as HTMLInputElement).value)
                .then(res => {
                    if (res){
                    setTimezone(cityTimezone.lookupViaCity(res.name).find(item=>item.iso2 === res.sys.country)?.timezone ?? "Asia/Tehran")
                    }
                    setWeather(res)
                })
                .finally(() => {
                    setIsLoading(false)
                });

        }
    }
    useEffect(() => {
        if (city) {
            setIsLoading(true);
            getWeather(city)
                .then(res => {
                    setWeather(res)
                    setTimezone(cityTimezone.lookupViaCity(res.name).find(item=>item.iso2 === res.sys.country)?.timezone ?? " Asia/Tehran")
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [city])
    return (
        <aside
            className={"col-span-3 bg-gray-300/20 backdrop-blur-md ring ring-white shadow-lg shadow-black flex flex-col gap-10 py-8 px-6 relative"}>
            <div className={"flex items-center border-b border-white/40 p-1 w-full justify-between"}>
                <div className={"flex items-center gap-1.5"}>
                    <img src={compass} alt={"location"} className={"w-9"}/>
                    <Input type={"text"} placeholder={"City Name + Press Enter"}
                           onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => searchHandler(e)}
                           className={"bg-transparent text-white border-none outline-none flex-1"}/>
                </div>
            </div>
            <div>
                <span
                    className={"text-5xl  flex items-center gap-1 justify-center"}>{weather ? weather?.main?.temp : "-"}
                    <img src={celsius} className={"w-12"} alt={"deg"}/></span>
            </div>
            <div className={"px-10 flex items-center justify-between"}>
                <div className={"flex items-center gap-1"}>
                    <img src={thermometerWarmer} alt={"max-temp"} className={"w-12"}/>
                    <span className={"flex items-center gap-1"}>{weather ? weather?.main?.temp_max : "-"} &deg;</span>
                </div>
                <div className={"flex items-center gap-1"}>
                    <img src={thermometerColder} alt={"min-temp"} className={"w-12"}/>
                    <span>{weather ? weather?.main?.temp_min : "-"} &deg;</span>
                </div>

            </div>
            <div className={"flex items-center justify-between px-2"}>
                <div className={"flex items-center gap-1"}>
                    <img src={humidity} alt={"humidity"}/>
                    <div className={"flex flex-col gap-1"}>
                        <h4 className={"text-2xl"}>{weather ? weather?.main?.humidity : "0"}%</h4>
                        <span className={"capitalize text-xs opacity-60"}>humidity</span>
                    </div>
                </div>

                <div className={"flex items-center gap-1"}>
                    <img src={wind} alt={"wind"} className={"w-12"}/>
                    <div className={"flex flex-col gap-1"}>
                        <h4 className={"text-2xl"}>{weather ? weather?.wind?.speed : "0"} m/h</h4>
                        <span className={"capitalize text-xs opacity-60"}>Wind Speed</span>
                    </div>

                </div>

            </div>
            <div className={"flex items-center justify-between px-6 mt-5"}>
                <div className={"flex flex-col items-center gap-3"}>
                    <div className={"flex items-center gap-1.5"}>
                        <h5 className={"text-lg opacity-60"}>Sunset</h5>
                        <img src={sunset} className={"w-14"} alt={"sunset"}/>
                    </div>
                    <span>{weather ? moment(weather?.sys?.sunset * 1000).tz(timezone).format('LT') : "-"}</span>
                </div>
                <div className={"flex flex-col items-center gap-3"}>
                    <div className={"flex items-center gap-4"}>
                        <h5 className={"text-lg opacity-60"}>Sunrise</h5>
                        <img src={sunrise} alt={"sunrise"} className={"w-14"}/>
                    </div>
                    <span>{weather ? moment(weather?.sys?.sunrise * 1000).tz(timezone).format('LT') : "-"}</span>
                </div>
            </div>
            <div className={"flex flex-col items-center justify-center gap-3"}>
                <h4>TimeZone</h4>

                <span>{weather ? timezone +"  "+ moment(weather.timezone).tz(timezone).format("HH:mm") : "-"}</span>
            </div>
            <div className={"absolute bottom-2 left-2"}>
                <span>NV Weather</span>
            </div>
        </aside>
    );

}

export default Aside;