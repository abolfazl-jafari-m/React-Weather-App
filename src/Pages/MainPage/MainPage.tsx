import Aside from "../../Components/Main/Aside/Aside.tsx";
import Contents from "../../Components/Main/Content/Contents.tsx";
import {useContext} from "react";
import {LoadingContext, LoadingContextInterface} from "../../Context/LoadingContext.tsx";
import loading from "/images/partly-cloudy-night-snow.svg";
import {WeatherProvider} from "../../Context/WeatherContext.tsx";


function MainPage() {
    const {isLoading} = useContext(LoadingContext) as LoadingContextInterface
    return (
        <WeatherProvider>
            <div
                className={"w-full min-h-screen bg-[url(/images/cloudy-wallpaper.webp)] grid grid-cols-12 bg-no-repeat bg-center bg-cover font-fuzzy text-white"}>
                <Aside/>
                <Contents/>
            </div>
            {
                isLoading &&
                <div className={"w-full h-screen fixed top-0 left-0 bg-gray-700/60 flex items-center justify-center"}>
                    <div className={" p-2 rounded-lg drop-shadow-lg shadow-lg shadow-black bg-zinc-700"}>
                        <img src={loading} alt={"loading"} className={"w-48"}/>
                    </div>
                </div>
            }
        </WeatherProvider>
    );
}

export default MainPage;