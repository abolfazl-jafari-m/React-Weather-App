import Input from "../../Base/Input/Input.tsx";
import {motion} from "motion/react";
import {useContext} from "react";
import {LoginContext, LoginContextInterface} from "../../../Context/LoginContext.tsx";


function RegisterForm() {
    const {setIsLogin} = useContext(LoginContext) as LoginContextInterface
    return (
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
    );
}

export default RegisterForm;