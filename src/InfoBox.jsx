import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1705254827975-e19dd1612aac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL= "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const COLD_URL= "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW4lMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity > 80
          ? <AcUnitIcon/> 
          : info.temp > 15 
          ? <LightModeIcon/> 
          : <ThunderstormIcon/> 
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Humidity: {info.humidity}</p>
          <p>Temprature: {info.temp}&deg;C</p>
          <p>Min_Temp: {info.temp_min}&deg;C</p>
          <p>Max_Temp: {info.temp_max}&deg;C</p>
          <p>Weather can be describes as <i>{info.weather} and feels like {info.feelslike}&deg;C</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}