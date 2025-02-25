import axios from "axios";
import {Weather_API_KEY} from "../Constants/Constants.ts";


export async function getWeather(city: string) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weather_API_KEY}`);
        return response.data;
    }catch (e){
        console.log(e)
    }
}
