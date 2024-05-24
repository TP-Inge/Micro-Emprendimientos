import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 

const VerDetalle = ({ nombreEmprendimiento, descripcionEmprendimiento, coordenadaX, coordenadaY }) => {
  const position = [coordenadaY, coordenadaX]

  return (
    <>
      <h1>{nombreEmprendimiento}</h1>
      <p>{descripcionEmprendimiento}</p>
      <div style={{ width: "100%", height: "400px" }}>
        <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{nombreEmprendimiento}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default VerDetalle;
