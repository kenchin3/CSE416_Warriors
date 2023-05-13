import React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import axios from "axios";
import pa2020 from "../../geoJSON/pa2020.json";
import pa2022 from "../../geoJSON/pa2022.json";
import ok2020 from "../../geoJSON/ok2020.json";
import ok2022 from "../../geoJSON/ok2022.json";
import tn2020 from "../../geoJSON/tn2020.json";
import tn2022 from "../../geoJSON/tn2022.json";
// import tn1 from "../../geoJSON/plan_0_boundary.json";
// import tn2 from "../../geoJSON/plan_1_boundary.json";
// import tn3 from "../../geoJSON/plan_2_boundary.json";
// import ok1 from "../../geoJSON/ok1.json";
// import ok2 from "../../geoJSON/ok2.json";
// import ok3 from "../../geoJSON/ok3.json";
// import pa1 from "../../geoJSON/pa1.json";
// import pa2 from "../../geoJSON/pa2.json";
// import pa3 from "../../geoJSON/pa3.json";
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
  setDistrict,
  stateData,
  district22,
  enacted,
}) {
  const [incumbentData, setIncumbentData] = React.useState();
  const [tn1, setTn1] = React.useState();
  const [tn2, setTn2] = React.useState();
  const [tn3, setTn3] = React.useState();

  React.useEffect(() => {
    if (stateValue == "tn") {
      axios
        .get("http://localhost:8080/file/download/" + "tnRandom1")
        .then((res) => {
          setTn1(res.data);
        });
      axios
        .get("http://localhost:8080/file/download/" + "tnRandom2")
        .then((res) => {
          setTn2(res.data);
        });
      axios
        .get("http://localhost:8080/file/download/" + "tnRandom3")
        .then((res) => {
          setTn3(res.data);
        });
    }
  }, [stateValue]);

  React.useEffect(() => {
    if (district22) {
      setIncumbentData(district22.districts);
    }
  }, [district22]);

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

  const enactedPlan = {
    color: "black",
    weight: 1,
    fillOpacity: 0.1,
  };

  let colorDistrictEnsemble = (feature) => {
    let colors = [
      "#e6194B",
      "#3cb44b",
      "#ffe119",
      "#4363d8",
      "#f58231",
      "#911eb4",
      "#42d4f4",
      "#f032e6",
      "#dcbeff",
      "#fabed4",
      "#469990",
      "#bfef45",
      "#9A6324",
      "#fffac8",
      "#800000",
      "#aaffc3",
      "#808000",
      "#ffd8b1",
      "#000075",
      "#a9a9a9",
      "#ffffff",
      "#000000",
    ];
    // console.log(parseInt(feature.properties["CD"]))
    // console.log(filter)
    return {
      fillColor: colors[parseInt(feature.properties["CD"])],
      color: "grey",
      weight: 0.5,
      fillOpacity:
        districtValue + 1 == parseInt(feature.properties["CD"]) ? 5.0 : 0.3,
    };
  };

  let colorDistrict = (feature) => {
    let incumbents = incumbentData;

    if (incumbents) {
      let district = parseInt(feature.properties.DISTRICT - 1);
      // console.log("district: " + district);
      // console.log("districtVal: " + districtValue);

      if (incumbents[district] && incumbents[district]["incumbent"] === "rep") {
        return {
          fillColor: "red",
          color: "black",
          fillOpacity:
            districtValue === -1 ? 0.5 : district === districtValue ? 1.0 : 0.5,
          weight: 0.8,
        };
      } else if (
        incumbents[district] &&
        incumbents[district]["incumbent"] === "dem"
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
      console.log("UserMovementChanges: " + stateAndDistrict[1]);
      setStateValue(stateAndDistrict[0]);
      setDistrict(stateAndDistrict[1]);
      // console.log("onclick: " + districtValue);
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
        {filter === "YR22" && stateValue == "" && (
          <GeoJSON
            data={pa2022.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && stateValue == "" && (
          <GeoJSON
            data={tn2022.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && stateValue == "" && (
          <GeoJSON
            data={ok2022.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}

        {filter === "YR20" && stateValue == "pa" && (
          <GeoJSON
            data={pa2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && stateValue == "pa" && (
          <GeoJSON
            data={pa2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR20" && stateValue == "ok" && (
          <GeoJSON
            data={ok2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && stateValue == "ok" && (
          <GeoJSON
            data={ok2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR20" && stateValue == "tn" && (
          <GeoJSON
            data={tn2020.features}
            style={district2020}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter === "YR22" && stateValue == "tn" && (
          <GeoJSON
            data={tn2022.features}
            style={colorDistrict}
            onEachFeature={userMovementChanges}
          />
        )}
        {filter == 1 && stateValue == "tn" && tn1 && (
          <GeoJSON data={tn1.features} style={colorDistrictEnsemble} />
        )}
        {filter == 2 && stateValue == "tn" && tn2 && (
          <GeoJSON data={tn2.features} style={colorDistrictEnsemble} />
        )}
        {filter == 3 && stateValue == "tn" && tn3 && (
          <GeoJSON data={tn3.features} style={colorDistrictEnsemble} />
        )}
        {enacted && stateValue == "tn" && (
          <GeoJSON data={tn2022.features} style={enactedPlan} />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
