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
import paWinners from "./../data/paWinners.json";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  // map.fitBounds()
  return null;
}

function Map({ stateValue, filter }) {
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
    color: "white",
    weight: 1,
  };

  const district2022 = {
    color: "grey",
    weight: 1,
  };

  let colorDistrict = (feature) => {
    let district = parseInt(feature.properties.DISTRICT);
    // console.log(parseInt(feature.properties.DISTRICT), paWinners.data[feature.properties.DISTRICT])
    if (paWinners.data[district] === "Rep") {
      return {
        fillColor: "red",
        color: "black",
        fillOpacity: 0.6,
      };
    } else if (paWinners.data[district] === "Dem") {
      return {
        fillColor: "blue",
        color: "black",
        fillOpacity: 0.6,
      };
    } else {
      return {
        fillColor: "grey",
        color: "black",
        fillOpacity: 0.6,
      };
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
        scrollWheelZoom={false}
      >
        <ChangeView
          center={center(stateValue)}
          zoom={stateValue !== "" ? 7 : 4}
        />
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {pa2020.features.map((polygon, index) => { return <Polyline key={index} pathOptions={colorDistrict} positions={polygon.geometry.coordinates} /> })} */}
        {/* {filter.twoZero && <GeoJSON data={pa2020.features} style={district2020} />}
            {filter.twoTwo && <GeoJSON data={pa2022.features} style={district2022} />} */}
        {/* {console.log(pa2020.features[0].properties.AREA)} */}
        <Polyline
          pathOptions={colorDistrict}
          positions={pa2020.features[0].geometry.coordinates[0]}
        />
        {filter.twoZero && (
          <GeoJSON data={pa2020.features} style={colorDistrict} />
        )}
        {filter.twoZero && (
          <GeoJSON data={ok2020.features} style={district2020} />
        )}
        {filter.twoTwo && (
          <GeoJSON data={ok2022.features} style={district2022} />
        )}
        {filter.twoZero && (
          <GeoJSON data={tn2020.features} style={district2020} />
        )}
        {filter.twoTwo && (
          <GeoJSON data={tn2022.features} style={district2022} />
        )}
      </MapContainer>
    </>
  );
}

export default Map;
