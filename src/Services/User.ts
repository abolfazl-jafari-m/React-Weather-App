import axios from "axios";
import {API_KEY, USER_BASE_URL} from "../Constants/Constants.ts";

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${USER_BASE_URL}/login`, {email, password}, {headers: {"api_key": API_KEY}})
        return response.data
    } catch (e) {
        console.log(e);
    }
}
export async function register(email: string, password: string) {
    try {
        const response = await axios.post(`${USER_BASE_URL}/register`, {email :email,password : password}, {headers: {"api_key": API_KEY}})
        return response.data
    } catch (e) {
        console.log(e);
    }
}

