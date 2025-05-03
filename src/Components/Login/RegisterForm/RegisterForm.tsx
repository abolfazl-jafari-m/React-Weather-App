// import Input from "../../Base/Input/Input.tsx";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import {
  LoginContext,
  LoginContextInterface,
} from "../../../Context/LoginContext.tsx";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../../../Constants/Constants.ts";
import { register as registerUser } from "../../../Services/User.ts";
import useLocalStorage from "../../../Hooks/useLocalStorage/useLocalStorage.ts";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

type RegsterFormType = {
  email: string;
  password: string;
  rePassword: string;
};

function RegisterForm() {
  const { setIsLogin } = useContext(LoginContext) as LoginContextInterface;
  const [, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<RegsterFormType>();

  const handleRegister: SubmitHandler<RegsterFormType> = (data) => {
    const loadingToast = toast.loading("loading...", {
      style: { width: "320px" },
    });
    registerUser(data.email, data.password)
      .then((res) => {
        if (res) {
          setToken(res.accessToken);
          toast.success("Register was Successful", {
            id: loadingToast,
          });
          setTimeout(() => navigate("/"), 500);
        }
      })
      .finally(() => setTimeout(() => toast.remove(loadingToast), 500));
  };

  return (
    <div
      className={
        "flex flex-col gap-10 items-center max-lg:w-full max-lg:h-full max-lg:rounded-none w-2/3 bg-gray-950/70 backdrop-blur-xl backdrop-brightness-50 rounded-lg shadow-black shadow-lg  p-5 font-fuzzy "
      }
    >
      <h2 className={"font-bold text-4xl text-white"}>Register</h2>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className={"w-full flex flex-col gap-7"}
      >
        <div className={"flex flex-col gap-2"}>
          <div
            className={
              "flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"
            }
          >
            <label className={"text-lg uppercase"}>email :</label>
            <input
              type={"text"}
              className={"bg-transparent py-1 px-3 rounded-md outline-none"}
              placeholder={"Please Enter Your Name"}
              {...register("email", {
                required: "this Field is Required",
                pattern: {
                  value: REGEX_EMAIL,
                  message: "Your Email is Invalid",
                },
              })}
            />
          </div>
          <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </div>

        <div className={"flex flex-col gp-2"}>
          <div
            className={
              "flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"
            }
          >
            <label className={"text-lg uppercase"}>Password :</label>
            <div className={"flex items-center w-full"}>
              <input
                type={!showPass ? "password" : "text"}
                className={
                  "bg-transparent flex-1 py-1 px-3 rounded-md outline-none"
                }
                placeholder={"Your Password..."}
                {...register("password", {
                  required: "this Field is Required",
                  pattern: {
                    value: REGEX_PASSWORD,
                    message:
                      "Your password have to Contains 8 character & digits & Special Letter",
                  },
                  validate: (data) => {
                    if (data !== getValues("rePassword"))
                      return "password must be the Same";
                  },
                })}
              />
              <div onClick={() => setShowPass(!showPass)} className={"px-2"}>
                {!showPass ? <FaEye /> : <FiEyeOff className={"text-white"} />}
              </div>
            </div>
          </div>
          <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        </div>

        <div className={"flex flex-col gap-2"}>
          <div
            className={
              "flex flex-col gap-2 bg-zinc-900/25 has-focus:bg-zinc-950/40 text-white border-2 border-gray-800/50 transition ease-linear duration-200 p-2 has-focus:border-black rounded-md"
            }
          >
            <label className={"text-lg uppercase"}>Repeat Password :</label>
            <input
              type={!showPass ? "password" : "text"}
              className={"bg-transparent py-1 px-3 rounded-md outline-none"}
              placeholder={"Repeat Your Password..."}
              {...register("rePassword", {
                required: "this Field is Required",
                pattern: {
                  value: REGEX_PASSWORD,
                  message:
                    "Your password have to Contains 8 character & digits & Special Letter",
                },
                validate: (data) => {
                  if (data !== getValues("password")) {
                    return "password must be the Same";
                  }
                },
              })}
            />
          </div>
          <div className={"text-xs text-red-400 tracking-tighter px-2 min-h-6"}>
            {errors.rePassword && <span>{errors.rePassword.message}</span>}
          </div>
        </div>

        <motion.button
          initial={{ width: "50%" }}
          whileHover={{ width: "80%" }}
          className={
            "py-2 self-center px-8 rounded-xl bg-white/60 shadow-lg shadow-black text-black font-bold cursor-pointer hover:bg-zinc-700  hover:text-white transition ease-in duration-200 "
          }
          type={"submit"}
        >
          Register
        </motion.button>
      </form>
      <div className={"text-xs text-white tracking-tight opacity-70"}>
        You already have account{" "}
        <span
          className={"text-lg opacity-100 underline cursor-pointer"}
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;
