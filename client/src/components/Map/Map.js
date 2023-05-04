import React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import axios from "axios";
import pa2020 from "../../geoJSON/pa2020.json";
import pa2022 from "../../geoJSON/pa2022.json";
import ok2020 from "../../geoJSON/ok2020.json";
import ok2022 from "../../geoJSON/ok2022.json";
import tn2020 from "../../geoJSON/tn2020.json";
import tn2022 from "../../geoJSON/tn2022.json";
import tn1 from "../../geoJSON/plan_0_boundary.json";
import L from "leaflet";
import leafletPip from "@mapbox/leaflet-pip";

import "./Map.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({
  stateValue,
  setStateValue,
  filter,
  setFilter,
  districtValue,
  stateData,
  incumbentData,
}) {
  const [mapData, setMapData] = React.useState();
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    if (stateValue) {
      axios
        .get("http://localhost:8080/api/getMapByState", {
          params: { state: stateValue.toUpperCase() },
        })
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

  let colorDistrict = (feature) => {
    let incumbents = incumbentData;

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
      } else if (
        incumbents[district] &&
        incumbents[district]["party"] === "DEM"
      ) {
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

  // ok x range: -104 to -93
  // y range: 32 to 38

  // tn x range: -79 to -91
  // y range: 33 to 38

  // pa x range: -82 to -72
  // y range: 37 to 44

  const identifyStateWithPoint = (coordinate) => {
    let stateMaxMinCoordinates = [
      [-79, -91, 33, 38], // tn
      [-93, -104, 32, 38], // ok
      [-72, -82, 39, 44], // pa
    ];
    let stateNames = ["tn", "ok", "pa"];

    for (let i = 0; i < stateMaxMinCoordinates.length; i++) {
      if (
        coordinate[0] < stateMaxMinCoordinates[i][0] &&
        coordinate[0] > stateMaxMinCoordinates[i][1] &&
        coordinate[1] > stateMaxMinCoordinates[i][2] &&
        coordinate[1] < stateMaxMinCoordinates[i][3]
      ) {
        return stateNames[i];
      }
    }
    return "fail";
  };

  const determineStateValue = (latlng) => {
    let stateBoundary;
    let coordinate = [latlng.lng, latlng.lat];
    let districtPointIsIn = {};

    let state = identifyStateWithPoint(coordinate);

    if (state === "tn") {
      stateBoundary = tn2022;
    } else if (state === "ok") {
      stateBoundary = ok2022;
    } else if (state === "pa") {
      stateBoundary = pa2022;
    }

    for (var i = 0; i < stateBoundary.features.length; i++) {
      if (stateBoundary.features[i]["geometry"]["type"] === "Polygon") {
        let border = L.geoJSON(stateBoundary.features[i]);
        districtPointIsIn = leafletPip.pointInLayer(coordinate, border, true);
        if (districtPointIsIn.length > 0) {
          let stateAndDistrict =
            state +
            "-" +
            districtPointIsIn[0]["feature"]["properties"]["DISTRICT"];
          return stateAndDistrict;
        }
      }
    }
    return "fail";
  };

  const userMovementChanges = (feature, layer) => {
    layer.on("mouseover", function (e) {
      let stateAndDistrict = determineStateValue(e.latlng);
    });
    layer.on("click", function (e) {
      let stateAndDistrict = determineStateValue(e.latlng);
      stateAndDistrict = stateAndDistrict.split("-");
      setStateValue(stateAndDistrict[0]);
    });
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

        {/* {filter === "YR20" && stateValue === "pa" && (
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
        )} */}

        {filter === "YR20" && (
          <GeoJSON
            data={pa2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && (
          <GeoJSON
            data={pa2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR20" && (
          <GeoJSON
            data={ok2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && (
          <GeoJSON
            data={ok2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR20" && (
          <GeoJSON
            data={tn2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && (
          <GeoJSON
            data={tn2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter == 1 && <GeoJSON data={tn1.features} />}
      </MapContainer>
    </>
  );
}

export default Map;
