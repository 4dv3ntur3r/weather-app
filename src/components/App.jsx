import React, { useState } from "react";
import "moment-timezone/builds/moment-timezone-with-data-10-year-range";
import { Grid } from "@mui/material";
import CityWeather from "./CityWeather";
import SearchCity from "./SearchCity";

function App() {
  const [city, setCity] = useState("");
  const defaultCities = [
    "Toronto",
    "London",
    "New York",
    "Paris",
    "Hong Kong",
    "Colombo",   
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(event.target.elements.cityInput.value);
    
  };

  return (
    <div>
      
      <SearchCity handleSubmit={handleSubmit}/>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px" }}
      >
        {city ? <CityWeather city={city} /> : defaultCities.map((city, index) => (
          <CityWeather city={city} key={index} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
