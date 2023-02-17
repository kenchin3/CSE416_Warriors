import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import pa2020 from "./../geoJSON/pa2020.json";
import pa2022 from "./../geoJSON/pa2022.json";
import ok2020 from "./../geoJSON/ok2020.json";
import ok2022 from "./../geoJSON/ok2022.json";
import tn2020 from "./../geoJSON/tn2020.json";
import tn2022 from "./../geoJSON/tn2022.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  // console.log(center, zoom)
  map.setView(center, zoom);
  return null;
}

function Map({tabValue, setTabValue, stateValue, setStateValue}) {
  

  let center = (stateValue) => {
    switch(stateValue) {
      case "":
        return [41.166113,-77.61552];
      case "pa":
        return [41.166113,-77.61552];
      case "tn":
        return [35.886,-86.422];
      case "ok":
        return [35.4356,-97.37];
    }
  }

 

const district2020 = {
  color: "white",
  weight: 1,
  fillColor: "red",
  fillOpacity: 0.5,
};

const district2022 = {
  color: "white",
  weight: 1,
  fillColor: "blue",
  fillOpacity: 0.5,
};

 

  return (
    <>
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
        <GeoJSON data={pa2020.features} style={district2020} />
        <GeoJSON data={pa2022.features} style={district2022} />
        <GeoJSON data={ok2020.features} style={district2020} />
        <GeoJSON data={ok2022.features} style={district2022} />
        <GeoJSON data={tn2020.features} style={district2020} />
        <GeoJSON data={tn2022.features} style={district2022} />
        
      </MapContainer>
    </>
  );
}

export default Map;
