import React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";
import "./Map.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ stateValue, filter, districtValue, stateData, incumbentData}) {
  const [bdy20, setBdy20] = React.useState();
  const [bdy22, setBdy22] = React.useState();

  React.useEffect(() => {
    if (stateData) {
      let data = stateData.maps.filter(function(map){return map.districtPlanID=="YR20"})[0]["boundary"]["features"]
      setBdy20(data);
      data = stateData.maps.filter(function(map){return map.districtPlanID=="YR22"})[0]["boundary"]["features"]
      setBdy22(data);
     }
    }, [stateData]);

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
      incumbents = incumbents.data.map((a) =>
        a["Win"] === "Win" ? a["Party"] : "Open"
      );
      let district = parseInt(feature.properties.DISTRICT - 1);

      if (incumbents[district] === "Rep") {
        return {
          fillColor: "red",
          color: "black",
          fillOpacity:
            districtValue === -1 ? 0.5 : district === districtValue ? 1.0 : 0.5,
          weight: 0.8,
        };
      } else if (incumbents[district] === "Dem") {
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
        {bdy20 && filter == "YR20" && (
          <GeoJSON data={bdy20} style={district2020} />
        )}
        {bdy22 && filter == "YR22" && (
          <GeoJSON data={bdy22} style={colorDistrict} />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
