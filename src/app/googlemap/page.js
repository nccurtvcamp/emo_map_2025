"use client";

import Image from "next/image";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Home() {
  const defaultProps = {
    center: {
      lat: 25.04396201999832,
      lng: 121.52776826218951
    },
    zoom: 16
  };

  return (
    <>
      HOME
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC6rkv2daiOJQK5HOa9SOZeD3qPSQSuqrU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </>
  );
}
