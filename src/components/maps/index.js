import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const defaultCenter = { lat: 42.64014889778318, lng: 24.35811891735378 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={11}
            defaultCenter={defaultCenter}
            defaultOptions={defaultOptions}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '117%' };

export default function GoogleMaps() {
    return (
        <RegularMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAktck_NAVYqI5hUgCjRhtMDWl1-qVIOXw"
            loadingElement={<div style={loadingElementStyle} />}
            containerElement={<div style={containerElementStyle} />}
            mapElement={<div style={mapElementStyle} />}
        />
    );
}