import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import pa2020 from "./../geoJSON/pa2020.json";
import test from "./../geoJSON/test.geojson";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(pa2020.features);
    // console.log(test)
  }

  districtStyle = {
    color: "black",
    weight: 0.5,
    fillColor: "red",
    fillOpacity: 0.5,
  };

  render() {
    // console.log(pa2020.features)
    return (
      <>
        <MapContainer
          className="markercluster-map"
          center={[40.045714, -74.977435]}
          zoom={4}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[59.43046, 24.728563]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <GeoJSON data={pa2020.features} style={this.districtStyle} />
        </MapContainer>
      </>
    );
  }
}

export default Map;
