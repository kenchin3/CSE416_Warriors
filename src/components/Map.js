import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import pa2020 from "./../geoJSON/pa2020.json";
import ok2020 from "./../geoJSON/ok2020.json";
import tn2020 from "./../geoJSON/tn2020.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  // console.log(center, zoom)
  map.setView(center, zoom);
  return null;
}

function Map({tabValue, setTabValue}) {
  

 let center = (tabValue) => {
    switch(tabValue) {
      case 0:
        return [41.166113,-77.61552];
      case 1:
        return [41.166113,-77.61552];
      case 2:
        return [35.886,-86.422];
      case 3:
        return [35.4356,-97.37];
    }
    }

 

const districtStyle = {
  color: "black",
  weight: 0.5,
  fillColor: "red",
  fillOpacity: 0.5,
};

 

  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={center(tabValue)}
        zoom={7}
        maxZoom={10}
        bounds={[[40.712216, -74.22655], [40.773941, -74.12544]]}
      >
        <ChangeView center={center(tabValue)} zoom={8} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={pa2020.features} style={districtStyle} />
        <GeoJSON data={ok2020.features} style={districtStyle} />
        <GeoJSON data={tn2020.features} style={districtStyle} />
        
      </MapContainer>
    </>
  );
  
}

export default Map;
