import logo from "../../../assets/images/logo.png";
import Button from "../../Base/Button/Button.tsx";


function Contents() {
    return (
        <main className={"col-span-9  h-screen  flex flex-col p-5"}>
            <header className={'w-full flex items-center justify-between p-4'}>
                <div className={"flex items-center gap-2"}>
                    <img src={logo} alt={"logo"}
                         className={"h-10 w-10 border border-white rounded-md shadow shadow-black"}/>
                    <h1 className={"text-xl font-bold"}>NV Weather</h1>
                </div>
                <div className={"flex items-center gap-2"}>
                    <p>abolfazljafari563@gmail.com</p>
                    <span
                        className={"p-2 rounded-full border-white border h-7 w-7 items-center flex justify-center"}>A</span>
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
                    <Button type={"button"}
                        className={"rounded-3xl bg-gray-300/30 backdrop-blur-sm cursor-pointer shadow shadow-black py-1 px-8 border border-white"}>See
                        Details
                    </Button>
                    <Button type={"button"}
                        className={"rounded-3xl bg-gray-300/30 backdrop-blur-sm cursor-pointer shadow shadow-black py-1 px-8 border border-white"}>Add
                        To Favorite
                    </Button>

                </div>


            </section>
        </main>
    );
}

export default Contents;