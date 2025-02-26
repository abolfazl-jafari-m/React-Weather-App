import {motion} from "motion/react";
import lightning from "/images/thunderstorms-night-snow.svg";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";
import {BsTwitterX} from "react-icons/bs";
import {useContext} from "react";
import {LoginContext, LoginContextInterface} from "../../../Context/LoginContext.tsx";



function Overlay() {
    const {isLogin} = useContext(LoginContext) as LoginContextInterface
    return (
        <motion.div layout={true}
                    className={`absolute justify-center font-fuzzy items-center text-white flex flex-col gap-3 w-1/2 h-full top-0   ${!isLogin ? "left-0" : "right-0"} bg-black/80 bg-cover bg-center bg-no-repeat backdrop-blur-lg backdrop-brightness-50 ring ring-white shadow-xl shadow-black backdrop-saturate-100`}>

            <img src={lightning} alt={"logo"} className={"w-36"}/>
            <h2 className={"text-4xl font-bold"}>Welcome to NV Weather</h2>
            <p className={"opacity-70"}>Copyright © 2025 NV Design . All rights reserved.</p>

            <div className={"flex items-center gap-5 justify-center"}>
                <AiFillInstagram size={"35"}
                                 className={"hover:text-rose-400 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                <BiLogoTelegram size={"35"}
                                className={"hover:text-sky-800 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                <AiFillLinkedin size={"35"}
                                className={"hover:text-blue-900 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                <BsTwitterX size={"35"}
                            className={"hover:text-sky-300 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
            </div>
        </motion.div>
    );
}

export default Overlay;