import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wanderland",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔥 update function
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setLoading(false);
    setError(null);
  };

  return (
    <div className="app">

      <h1 style={{ textAlign: "center" }}>🌦️ Weather App</h1>

      <SearchBox 
        updateInfo={updateInfo} 
        setLoading={setLoading}
        setError={setError}
      />

      {/* 🔄 Loading */}
      {loading && <p>Loading...</p>}

      {/* ❌ Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Data */}
      {!loading && !error && <InfoBox info={weatherInfo} />}

    </div>
  );
}