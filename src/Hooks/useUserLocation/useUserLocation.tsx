import {useEffect, useState} from "react";
import axios from "axios";

export default function useUserLocation() {
    const [location, setLocation] = useState<string | null>(null);
    useEffect(() => {
        axios.get("http://ip-api.com/json")
            .then((res) => {
                if (res.status === 200) {
                    setLocation(res.data.city)
                }
            })
    } , [])
    return location;
}