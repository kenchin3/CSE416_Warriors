import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Polyline,
} from "react-leaflet";
import pa2020 from "./../geoJSON/pa2020.json";
import pa2022 from "./../geoJSON/pa2022.json";
import ok2020 from "./../geoJSON/ok2020.json";
import ok2022 from "./../geoJSON/ok2022.json";
import tn2020 from "./../geoJSON/tn2020.json";
import tn2022 from "./../geoJSON/tn2022.json";
import okIncumbent from "./../data/okIncumbent.json";
import tnIncumbent from "./../data/tnIncumbent.json";
import paIncumbent from "./../data/paIncumbent.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  // map.fitBounds()
  return null;
}

function Map({ stateValue, filter }) {
  const [stateFile, setStateFile] = React.useState(null);

  let center = (stateValue) => {
    switch (stateValue) {
      case "":
        return [39.8282, -98.579];
      case "pa":
        return [41.166113, -77.61552];
      case "tn":
        return [35.886, -86.422];
      case "ok":
        return [35.4356, -97.37];
      default:
        return [0, 0];
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
    let incumbents;
    switch (stateValue) {
      case "pa":
        incumbents = paIncumbent;
        break;
      case "tn":
        incumbents = tnIncumbent;
        break;
      case "ok":
        incumbents = okIncumbent;
        break;

      // case "pa" && filter.twoZero:
      //   incumbents = pa2020
      // case "pa" && filter.twoTwo:
      //   incumbents = pa2022
      // case "tn" && filter.twoZero:
      //   incumbents = tn2020
      // case "tn" && filter.twoTwo:
      //   incumbents = tn2022
      // case "ok" && filter.twoZero:
      //   incumbents = ok2020
      // case "ok" && filter.twoTwo:
      //   incumbents = ok2022
    }

    if (incumbents) {
      incumbents = incumbents.data.map((a) => a["Party"]);
      let district = parseInt(feature.properties.DISTRICT - 1);

      if (incumbents[district] === "Rep") {
        return {
          fillColor: "red",
          color: "black",
          fillOpacity: 0.65,
          weight: 0.8,
        };
      } else if (incumbents[district] === "Dem") {
        return {
          fillColor: "#0015BC",
          color: "black",
          fillOpacity: 0.65,
          weight: 0.8,
        };
      } else {
        return {
          fillColor: "grey",
          color: "black",
          fillOpacity: 0.65,
          weight: 0.8,
        };
      }
    }
  };

  // fillColor: 'blue',
  // color: 'lime'

  // const { twoZero, twoTwo, random } = filter;

  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={center(stateValue)}
        zoom={7}
        maxZoom={10}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={1.0}
      >
        <ChangeView
          center={center(stateValue)}
          zoom={stateValue !== "" ? 7 : 4}
        />
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {filter === "2020" && stateValue === "pa" && (
          <GeoJSON data={pa2020.features} style={district2020} />
        )}
        {filter === "2022" && stateValue === "pa" && (
          <GeoJSON data={pa2022.features} style={colorDistrict} />
        )}
        {filter === "2020" && stateValue === "ok" && (
          <GeoJSON data={ok2020.features} style={district2020} />
        )}
        {filter === "2022" && stateValue === "ok" && (
          <GeoJSON data={ok2022.features} style={colorDistrict} />
        )}
        {filter === "2020" && stateValue === "tn" && (
          <GeoJSON data={tn2020.features} style={district2020} />
        )}
        {filter === "2022" && stateValue === "tn" && (
          <GeoJSON data={tn2022.features} style={colorDistrict} />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
