import Input from "../../Components/Base/Input/Input.tsx";
import {motion} from "motion/react";
import {useState} from "react";
import lightning from  "/images/thunderstorms-night-snow.svg";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";
import {BsTwitterX} from "react-icons/bs";
import {hover} from "motion";

function LoginPage() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div
            className={"w-full h-screen bg-[url(src/assets/images/login-wallpaper.jpg)] bg-no-repeat bg-cover bg-center flex relative"}>
            <div className={"w-1/2 flex items-center justify-center h-full"}>
                <div
                    className={"flex flex-col gap-10 items-center w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "}>
                    <h2 className={"font-bold text-4xl text-white"}>Login</h2>
                    <form
                        className={"w-full flex flex-col gap-10"}>
                        <div
                            className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                            <label className={"text-lg uppercase"}>username or email :</label>
                            <Input type={"text"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Please Enter Your Name"}/>
                        </div>
                        <div
                            className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                            <label className={"text-lg uppercase"}>Password :</label>
                            <Input type={"password"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Your Password..."}/>
                        </div>

                        <motion.button initial={{width: '50%'}} whileHover={{width: "80%"}}
                                       className={"py-2 self-center px-8 rounded-xl bg-white/60 shadow-lg shadow-black text-black font-bold cursor-pointer hover:bg-zinc-700  hover:text-white transition ease-in duration-200 "}
                                       type={"button"}

                        >Login
                        </motion.button>

                    </form>
                    <div className={"text-xs text-white tracking-tight opacity-70"}>You not member yet , <span
                        className={"text-lg opacity-100 underline cursor-pointer"} onClick={() => setIsLogin(false)}>Sign Up</span>
                    </div>
                </div>

            </div>
            <div className={"w-1/2 flex items-center justify-center h-full"}>
                <div
                    className={"flex flex-col gap-10 items-center w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "}>
                    <h2 className={"font-bold text-4xl text-white"}>Register</h2>
                    <form
                        className={"w-full flex flex-col gap-10"}>
                        <div
                            className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                            <label className={"text-lg uppercase"}>username or email :</label>
                            <Input type={"text"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Please Enter Your Name"}/>
                        </div>
                        <div
                            className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                            <label className={"text-lg uppercase"}>Password :</label>
                            <Input type={"password"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Your Password..."}/>
                        </div>
                        <div
                            className={"flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"}>
                            <label className={"text-lg uppercase"}>Repeat Password :</label>
                            <Input type={"password"} className={"bg-transparent py-1 px-3 rounded-md outline-none"}
                                   placeholder={"Repeat Your Password..."}/>
                        </div>

                        <motion.button initial={{width: '50%'}} whileHover={{width: "80%"}}
                                       className={"py-2 self-center px-8 rounded-xl bg-white/60 shadow-lg shadow-black text-black font-bold cursor-pointer hover:bg-zinc-700  hover:text-white transition ease-in duration-200 "}
                                       type={"button"}
                        >Register
                        </motion.button>

                    </form>
                    <div className={"text-xs text-white tracking-tight opacity-70"}>You already have account <span
                        className={"text-lg opacity-100 underline cursor-pointer"}
                        onClick={() => setIsLogin(true)}>Login</span></div>
                </div>
            </div>
            <motion.div layout={true}
                        className={`absolute justify-center font-fuzzy items-center text-white flex flex-col gap-3 w-1/2 h-full top-0   ${!isLogin ? "left-0" : "right-0"} bg-black/80 bg-cover bg-center bg-no-repeat backdrop-blur-lg backdrop-brightness-50 ring ring-white shadow-xl shadow-black backdrop-saturate-100`}>

                <img src={lightning} alt={"logo"} className={"w-36"}/>
                <h2 className={"text-4xl font-bold"}>Welcome to NV Weather</h2>
                <p className={"opacity-70"}>Copyright © 2025 NV Design . All rights reserved.</p>

                <div className={"flex items-center gap-5 justify-center"}>
                    <AiFillInstagram  size={"35"} className={"hover:text-rose-400 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                    <BiLogoTelegram size={"35"} className={"hover:text-sky-800 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                    <AiFillLinkedin size={"35"} className={"hover:text-blue-900 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                    <BsTwitterX size={"35"} className={"hover:text-sky-300 transition ease-in duration-200 cursor-pointer hover:scale-110"}/>
                </div>
            </motion.div>


        </div>
    );
}

export default LoginPage;