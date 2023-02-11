import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import features from "./../geoJSON/pa2020.geojson"

class Map extends Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        console.log(features.geometry)
    }

    render() {
        // console.log(pa2020)
        return (
            <>
            <div>
                asdfasdfasdfasdf
            </div>
            <MapContainer
                className="markercluster-map"
                center={[41.2, -77.2]}
                zoom={4}
                maxZoom={18}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* <GeoJSON data= {pa2020.features} style={() =>
                    console.log(this.data) ({
                    color: 'black',
                    weight: 0.5,
                    fillColor: "#1a1d62",
                    fillOpacity: 1
                })}> */}

                {/* </GeoJSON> */}
            </MapContainer>
            </>
        )
    }
}

export default Map;