import {FaArrowDown, FaArrowUp, FaTemperatureHigh} from "react-icons/fa6";
import {FaSearchLocation} from "react-icons/fa";
import {GiSunrise, GiSunset} from "react-icons/gi";
import Input from "../../Base/Input/Input.tsx";

function Aside() {
    return (
        <aside
            className={"col-span-3 bg-gray-300/20 backdrop-blur-md ring ring-white shadow-lg shadow-black flex flex-col gap-10 py-8 px-6 relative"}>
            <div className={"flex items-center border-b border-white w-full p-2 justify-between"}>
                <div className={"flex items-center gap-3"}>
                    <FaTemperatureHigh size={"30"} color={"white"} className={"opacity-70"}/>
                    <Input type={"text"} placeholder={"City Name + Press Enter"}
                           className={"bg-transparent text-white border-none outline-none flex-1"}/>
                </div>
                <FaSearchLocation color={"white"} size={"30"} className={"opacity-80"}/>
            </div>
            <div>
                <h2 className={"text-5xl text-center"}>20 &deg; C</h2>
            </div>
            <div className={"px-10 flex items-center justify-between"}>
                <div className={"flex items-center gap-2"}>
                    <FaArrowUp size={"10"}/>
                    <span>23 &deg;</span>
                </div>
                <div className={"flex items-center gap-2"}>
                    <FaArrowDown size={"10"}/>
                    <span>17 &deg;</span>
                </div>

            </div>
            <div className={"flex items-center justify-between px-8"}>
                <div className={"flex flex-col gap-2"}>
                    <h4 className={"text-2xl"}>49%</h4>
                    <span className={"capitalize text-xs opacity-60"}>humidity</span>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <h4 className={"text-2xl"}>2.06 km/h</h4>
                    <span className={"capitalize text-xs opacity-60"}>Wind Speed</span>
                </div>
            </div>
            <div className={"flex items-center justify-between px-6 mt-5"}>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex items-center gap-4"}>
                        <h5 className={"text-lg opacity-60"}>Sunset</h5>
                        <GiSunset size={"15"}/>
                    </div>
                    <span>1740234151</span>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <div className={"flex items-center gap-4"}>
                        <h5 className={"text-lg opacity-60"}>Sunrise</h5>
                        <GiSunrise size={"15"}/>
                    </div>
                    <span>1740234151</span>
                </div>
            </div>
            <div className={"flex items-center justify-center gap-3"}>
                <h4>TimeZone</h4>
                <span>+3:30</span>
            </div>
            <div className={"absolute bottom-2 left-2"}>
                <span>NV Weather</span>
            </div>


        </aside>
    );
}

export default Aside;