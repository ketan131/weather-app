import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo, setLoading, setError }) {

  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "017ed4cde63075c60e14cbdec0281d8f";

  // 🔥 API call
  const getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();

    // ❌ Agar city galat ho
    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    // ✅ Correct data mapping
    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  // 🔤 input change
  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // 🚀 submit
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      setLoading(true);
      setError(null);

      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);

    } catch (err) {
      setError("No such place exists ❌");
      setLoading(false);
    }

    setCity("");
  };

  return (
    <div className="SearchBox">

      <form onSubmit={handleSubmit}>

        <TextField
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br /><br />

        <Button variant="contained" type="submit" sx={{ width: 120}}>
          Search
        </Button>

      </form>

    </div>
  );
}