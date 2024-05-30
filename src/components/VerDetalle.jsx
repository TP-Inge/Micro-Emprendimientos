import React from "react";
import "../css/verdetalle.css"
import DibujarMapa from './DibujarMapa'


const VerDetalle = ({ nombreEmprendimiento, descripcionEmprendimiento, coordenadaX, coordenadaY, ubicacionDisponible, correo, setVerDetalle, nombreComercio, direccionComercio, descripcionGeneral, rubroComercio, contactoComercio, formasPago, redesSociales, restricciones, zonaInfluencia}) => {
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
        <img src="src\assets\3891670.png" alt="" className="imagen-empresarial" />
        <footer>Contacto: {correo}</footer>
        <p> {nombreComercio}</p>
        <p> {direccionComercio}</p>
        <p> {descripcionGeneral}</p>
        <p> {rubroComercio}</p>
        <p> {contactoComercio}</p>
        <p> {formasPago}</p>
        <p> { redesSociales}</p>
        <p> {  restricciones}</p>
        <p> { zonaInfluencia}</p>

      </div>
      {ubicacionDisponible &&  <DibujarMapa position={position} nombreEmprendimiento={nombreEmprendimiento} />}
    </div>
  );
};

function Ver_detalle_comercio() {
  return(
    <>
    
     
    
    </>
  );
}
export default VerDetalle;
