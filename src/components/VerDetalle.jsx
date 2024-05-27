import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/verdetalle.css"

const VerDetalle = ({ nombreEmprendimiento, descripcionEmprendimiento, coordenadaX, coordenadaY, ubicacionDisponible, correo, setVerDetalle }) => {
  const position = [coordenadaY, coordenadaX];

  const handleAtras=()=>{
    setVerDetalle(false);
  }

  return (
    
    <div className="details-container">
      <div className="details-text">
      <button onClick={handleAtras} >{"<=="} </button>
    
        <h1>{nombreEmprendimiento}</h1>
        <p>{descripcionEmprendimiento}</p>
        <footer>Contacto: {correo}</footer>
      </div>
      {ubicacionDisponible ? (
        <div className="details-map">
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
      ) : (
        <div className="details-map">
          <p>La ubicación no está disponible.</p>
        </div>
      )}
    </div>
  );
};

export default VerDetalle;
