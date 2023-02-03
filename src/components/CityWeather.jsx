import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import "moment-timezone/builds/moment-timezone-with-data-10-year-range";
import WeatherCard from "./WeatherCard";

export default function CityWeather(props) {
    const [weather, setWeather] = useState({});
    const [time, setTime] = useState("");
    const [error, setError] = useState(false);
  
    useEffect(() => {

      const fetchWeather = async () => {
        //Api key is retrived from .env in root dir
        const API_KEY = process.env.REACT_APP_WEATHER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${API_KEY}`;
        try{
          const response = await axios.get(url);
          setWeather(response.data);
          setError(false);
        } catch(error){
          if(error.response.status === 404){
            setError(true);
          }
        }
      };
      fetchWeather();
    }, [props.city]);
  
    // Convert timezone from OpenWeatherMap to time in the relevant city
    useEffect(() => {
      if (weather.timezone !== null || weather.timezone !== undefined) {
        const timezone = weather.timezone; //needs to be converted in minutes
        const timezoneInMinutes = timezone / 60;
        setTime(moment().utcOffset(timezoneInMinutes).format("h:mm A"));
      }
    }, [weather]);

    //Update time state every minute 
    useEffect(() => {
      const interval = setInterval(() => {
        if (weather.timezone !== null || weather.timezone !== undefined) {
          const timezone = weather.timezone; //needs to be converted in minutes
          const timezoneInMinutes = timezone / 60;
          setTime(moment().utcOffset(timezoneInMinutes).format("h:mm A"));
        }
      }, 60 * 1000);
      return () => clearInterval(interval);
    }, [weather]);

    // If an API error occured display City not found then check if weather state and weather main is not empty before rendering weather information
  
    return error ? ( <span>Error: City not found</span> ) : weather && weather.main ? (
      
      <WeatherCard
        city={weather.name}
        temp={Math.floor(weather.main.temp)}
        time={time}
        icon={weather.weather[0].icon}
        condition={weather.weather[0].description}
        speed={Math.floor(weather.wind.speed)}
        humidity={weather.main.humidity}
        pressure={weather.main.pressure}
      />
    ) : null;
};