import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from '@mui/icons-material/Compress';



// Capitalize first letter of each word
function capitalizeWords (str){
  if(str){
  return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  }
};

export default function WeatherCard(props) {
  
  return (
    <Card
      className="card graidient-card flex"
      sx={{ maxWidth: 345, color: "#fff" }}
    >
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Grid container>
            <Grid item xs={6} md={6} lg={6} xl={6}>
              <CardHeader
                title={props.city}
                className="city"
                sx={{ padding: "2px", fontSize: "12px" }}
              />
            </Grid>
            <Grid item xs={6} md={6} lg={6} xl={6}>
              <CardHeader
                title={props.time}
                sx={{ padding: "2px", textAlign: "right" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} sx={{marginBottom: "40px"}}>
            <img src={`./images/weather-icon/${props.icon}.svg`} className="svgSize" alt="Weather Condition" />
          <Typography sx={{fontSize: "1.4em"}}>{capitalizeWords(props.condition)}</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Grid container>
            <Grid item xs={6} md={6} lg={6} xl={6}>
              <Grid container>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <IconButton>
                    <AirIcon sx={{ color: "#B2B2B2" }} />
                  </IconButton>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6} className="padding-top">
                  <Typography>{props.speed} km/h</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <IconButton>
                    <OpacityIcon sx={{ color: "#B2B2B2" }} />
                  </IconButton>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6} className="padding-top">
                  <Typography >{props.humidity}%</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <IconButton>
                    <CompressIcon sx={{ color: "#B2B2B2" }} />
                  </IconButton>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6} className="padding-top">
                  <Typography>{props.pressure}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={6} lg={6} xl={6} >
              <CardContent sx={{ fontSize: "5em" }}>{props.temp}°</CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
