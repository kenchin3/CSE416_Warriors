import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import pa2020 from "./../geoJSON/pa2020.json";
import pa2022 from "./../geoJSON/pa2022.json";
import ok2020 from "./../geoJSON/ok2020.json";
import ok2022 from "./../geoJSON/ok2022.json";
import tn2020 from "./../geoJSON/tn2020.json";
import tn2022 from "./../geoJSON/tn2022.json";
import Grid from "@mui/material/Grid";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import IncumbentTable from "./IncumbentTable"

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({tabValue, setTabValue, stateValue, setStateValue}) {
  const [filter, setFilter] = React.useState({
    twoZero: false,
    twoTwo: true,
    random: false,
  });
 

  let center = (stateValue) => {
    switch(stateValue) {
      case "":
        return [39.8282,-98.579];
      case "pa":
        return [41.166113,-77.61552];
      case "tn":
        return [35.886,-86.422];
      case "ok":
        return [35.4356,-97.37];
    }
  }

  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
    // console.log(event.target.value)
    // setState({
    //   ...state,
    //   [event.target.name]: event.target.checked,
    // });
  };

 

const district2020 = {
  color: "white",
  weight: 1,
  // fillColor: "red",
  // fillOpacity: 0.5,
};

const district2022 = {
  color: "grey",
  weight: 1,
  // fillColor: "blue",
  // fillOpacity: 0.5,
};

const { twoZero, twoTwo, random } = filter;
 
// const { 2020, 2022, random } = filter;

  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Boundaries</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={twoZero} onChange={handleChange} name="twoZero" />
              }
              label="2020"
            />
            <FormControlLabel
              control={
                <Checkbox checked={twoTwo} onChange={handleChange} name="twoTwo" />
              }
              label="2022"
            />
            <FormControlLabel
              control={
                <Checkbox checked={random} onChange={handleChange} name="random" />
              }
              label="Random"
            />
          </FormGroup>
        </FormControl>
        <IncumbentTable stateValue={stateValue}/>
      </Grid>
      <Grid item xs={6} md={6}>
        <MapContainer
          className="markercluster-map"
          center={center(stateValue)}
          zoom={7}
          maxZoom={10}
          bounds={[[40.712216, -74.22655], [40.773941, -74.12544]]}
        >
          <ChangeView center={center(stateValue)} zoom={8} />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {filter.twoZero && <GeoJSON data={pa2020.features} style={district2020} />}
          {filter.twoTwo && <GeoJSON data={pa2022.features} style={district2022} />}
          {filter.twoZero && <GeoJSON data={ok2020.features} style={district2020} />}
          {filter.twoTwo && <GeoJSON data={ok2022.features} style={district2022} />}
          {filter.twoZero && <GeoJSON data={tn2020.features} style={district2020} />}
          {filter.twoTwo && <GeoJSON data={tn2022.features} style={district2022} />}
        </MapContainer>
      </Grid>
    
      
    </Grid>
    
      
  
    </>
  );
}

export default Map;
