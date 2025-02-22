import {FaArrowDown, FaArrowUp, FaTemperatureHigh} from "react-icons/fa6";
import {FaSearchLocation} from "react-icons/fa";
import {GiSunrise, GiSunset} from "react-icons/gi";
import logo from "./assets/logo.png";


function App() {


    return (
        <>
            <div
                className={"w-full h-screen bg-[url(src/assets/wallpaper.jpg)] grid grid-cols-12 bg-no-repeat bg-center bg-cover font-fuzzy"}>
                <aside
                    className={"col-span-3 bg-gray-300/20 backdrop-blur-md ring ring-white shadow-lg shadow-black flex flex-col gap-10 py-8 px-6 text-white relative"}>
                    <div className={"flex items-center border-b border-white w-full p-2 justify-between"}>
                        <div className={"flex items-center gap-3"}>
                            <FaTemperatureHigh size={"30"} color={"white"} className={"opacity-70"}/>
                            <input type={"text"} placeholder={"City Name + Press Enter"}
                                   className={"bg-transparent text-white border-none outline-none flex-1"}/>
                        </div>
                        <FaSearchLocation color={"white"} size={"30"} className={"opacity-80"}/>
                    </div>
                    <div>
                        <h2 className={"text-5xl text-center"}>20 &deg; C</h2>
                    </div>
                    <div className={"px-10 flex items-center justify-between"}>
                        <div className={"flex items-center gap-2"}>
                            <FaArrowUp size={"10"} />
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
                <main className={"col-span-9  h-screen text-white flex flex-col p-5"}>
                    <header className={'w-full flex items-center justify-between p-4'}>
                        <div className={"flex items-center gap-2"}>
                            <img src={logo} alt={"logo"} className={"h-10 w-10 border border-white rounded-md shadow shadow-black"}/>
                            <h1 className={"text-xl font-bold"}>NV Weather</h1>
                        </div>
                        <div className={"flex items-center gap-2"}>
                            <p>abolfazljafari563@gmail.com</p>
                            <span className={"p-2 rounded-full border-white border h-7 w-7 items-center flex justify-center"}>A</span>
                        </div>
                    </header>
                    <section className={"flex-1 flex flex-col gap-10 px-14 py-8"}>
                        <div>
                            <h2 className={"text-7xl font-bold"}>Rain</h2>
                            <p className={"text-2xl opacity-80"}>Light Rain ...</p>
                        </div>
                        <div className={"flex items-center gap-1.5"}>
                            <img src={"https://openweathermap.org/img/wn/10d@2x.png"} alt={"rain"} className={"w-7"}/>
                            <span>IR</span>
                            <span>Friday , 14:43 pm</span>
                        </div>
                        <div className={"flex items-center gap-5"}>
                            <button className={"rounded-3xl bg-gray-300/30 backdrop-blur-sm cursor-pointer shadow shadow-black py-1 px-8 border border-white"}>See Details</button>
                            <button className={"rounded-3xl bg-gray-300/30 backdrop-blur-sm cursor-pointer shadow shadow-black py-1 px-8 border border-white"}>Add To Favorite</button>

                        </div>


                    </section>
                </main>
            </div>
        </>
    )
}

export default App
