import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {

  const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500";
  const HOT_URL = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500";
  const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=500";
  const RAIN_URL = "https://images.unsplash.com/photo-1623567932970-576132e5d056?w=500";

  
  let imageURL = info.humidity > 80
    ? RAIN_URL
    : info.temp > 30
    ? HOT_URL
    : info.temp > 15
    ? INIT_URL
    : COLD_URL;

  let WeatherIcon = info.humidity > 80
    ? <ThunderstormIcon />
    : info.temp > 30
    ? <SunnyIcon />
    : <AcUnitIcon />;

  return (
    <div className="InfoBox">
      <div className="cardContainer">

        <Card sx={{ width: "90%", maxWidth: 400, boxShadow: 5, borderRadius: 3 }}>

          <CardMedia
            sx={{ height: 180}}
            image={imageURL}
            title="weather image"
          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              {info.city} {WeatherIcon}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp}&deg;C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Humidity: {info.humidity}%
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Min Temp: {info.tempMin}&deg;C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Max Temp: {info.tempMax}&deg;C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Weather: <b>{info.weather.toUpperCase()}</b>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Feels Like: {info.feelslike}&deg;C
            </Typography>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}