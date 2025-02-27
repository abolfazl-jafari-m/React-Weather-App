import axios from "axios";
import {API_KEY, USER_BASE_URL} from "../Constants/Constants.ts";
import toast from "react-hot-toast";

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${USER_BASE_URL}/login`, {email, password}, {headers: {"api_key": API_KEY}})
        return response.data
    } catch (e :any) {
        toast.error(e.message , {
            style : {width : '320px'}
        })
    }
}

export async function register(email: string, password: string) {
    try {
        const response = await axios.post(`${USER_BASE_URL}/register`, {
            email,
            password
        }, {headers: {"api_key": API_KEY}})
        return response.data
    } catch (e :any) {
        toast.error(e.message , {
            style : {width : '320px'}
        })
    }
}

export async function getUser() {
    try {
        const response = await axios.get(`${USER_BASE_URL}/me`,
            {
                headers: {
                    "api_key": API_KEY,
                    "Authorization":`Bearer ${JSON.parse(localStorage.getItem("token") ?? "")}`
                }
            })
        return response.data
    } catch (e : any) {
        toast.error(e.message , {
            style : {width : '320px'}
        })
    }
}
