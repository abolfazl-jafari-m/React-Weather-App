import Aside from "../../Components/Main/Aside/Aside.tsx";
import Contents from "../../Components/Main/Content/Contents.tsx";


function MainPage() {
    return (
        <div
            className={"w-full h-screen bg-[url(src/assets/images/cloudy-wallpaper.jpg)] grid grid-cols-12 bg-no-repeat bg-center bg-cover font-fuzzy text-white"}>
            <Aside/>
            <Contents/>
        </div>
    );
}

export default MainPage;