import React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import axios from "axios";
import pa2020 from "./../geoJSON/pa2020.json";
import pa2022 from "./../geoJSON/pa2022.json";
import ok2020 from "./../geoJSON/ok2020.json";
import ok2022 from "./../geoJSON/ok2022.json";
import tn2020 from "./../geoJSON/tn2020.json";
import tn2022 from "./../geoJSON/tn2022.json";

import "./Map.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ stateValue, filter, setFilter, districtValue, stateData, incumbentData}) {
  const [mapData, setMapData] = React.useState();

  React.useEffect(() => {
    if (stateValue) {
      axios.get("http://localhost:8080/api/getMapByState", { params: { state: stateValue.toUpperCase() } })
        .then((res) => {
          setMapData(res.data);
      });
      
    }
  }, [stateValue]);

 
  let center = (stateValue) => {
    switch (stateValue) {
      case "":
        return [14.8282, -98.579];
      case "pa":
        return [41.166113, -77.61552];
      case "tn":
        return [35.886, -86.422];
      case "ok":
        return [35.4356, -98.37];
      default:
        return [14.8282, -98.579];
    }
  };

  const district2020 = {
    color: "black",
    weight: 1,
  };

  const district2022 = {
    color: "grey",
    weight: 1,
  };

  let colorDistrict = (feature) => {
    let incumbents = incumbentData

 
    if (incumbents) {
      let district = parseInt(feature.properties.DISTRICT - 1);
   
      if (incumbents[district] && incumbents[district]["party"] === "REP") {
        return {
          fillColor: "red",
          color: "black",
          fillOpacity:
            districtValue === -1 ? 0.5 : district === districtValue ? 1.0 : 0.5,
          weight: 0.8,
        };
      } else if (incumbents[district] &&  incumbents[district]["party"]  === "DEM") {
        return {
          fillColor: "#0015BC",
          color: "black",
          fillOpacity:
            districtValue === -1 ? 0.5 : district === districtValue ? 1.0 : 0.5,
          weight: 0.8,
        };
      } else {
        return {
          fillColor: "grey",
          color: "black",
          fillOpacity:
            districtValue === -1 ? 0.5 : district === districtValue ? 1.0 : 0.5,
          weight: 0.8,
        };
      }
    }
  };

  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={center(stateValue)}
        zoom={3}
        minZoom={3}
        maxZoom={10}
        maxBounds={[
          [20, -130],
          [50, -60],
        ]}
      >
        <ChangeView
          center={center(stateValue)}
          zoom={stateValue !== "" ? 6 : 4}
        />
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {filter === "YR20" && stateValue === "pa" && (
          <GeoJSON data={pa2020.features} style={district2020} />
        )}
        {filter === "YR22" && stateValue === "pa" && (
          <GeoJSON data={pa2022.features} style={colorDistrict} />
        )}
        {filter === "YR20" && stateValue === "ok" && (
          <GeoJSON data={ok2020.features} style={district2020} />
        )}
        {filter === "YR22" && stateValue === "ok" && (
          <GeoJSON data={ok2022.features} style={colorDistrict} />
        )}
        {filter === "YR20" && stateValue === "tn" && (
          <GeoJSON data={tn2020.features} style={district2020} />
        )}
        {filter === "YR22" && stateValue === "tn" && (
          <GeoJSON data={tn2022.features} style={colorDistrict} />
        )}
       
      </MapContainer>
    </>
  );
}

export default Map;
