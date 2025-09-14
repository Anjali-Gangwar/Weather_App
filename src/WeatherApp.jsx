import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Bareilly",
        feelslike: 37.16,
        humidity: 19,
        temp: 38.56,
        temp_min: 38.56,
        temp_max: 38.56,
        weather: "scattered clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}