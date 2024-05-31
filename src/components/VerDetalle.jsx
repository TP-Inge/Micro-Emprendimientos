import React from "react";
import "../css/verdetalle.css"
import DibujarMapa from './DibujarMapa'


const VerDetalle = ({ nombreEmprendimiento, descripcionEmprendimiento, coordenadaX, coordenadaY, ubicacionDisponible, correo, setVerDetalle, nombreComercio, direccionComercio, descripcionGeneral, rubroComercio, contactoComercio, formasPago, redesSociales, restricciones, zonaInfluencia }) => {
  const position = [coordenadaY, coordenadaX];

  const handleAtras = () => {
    setVerDetalle(false);
  }



  return (

    <div className="details-container">
      <div className="details-text">
        <button onClick={handleAtras} >{"<=="} </button>

        <h1>{nombreEmprendimiento}</h1>
        <p>{descripcionEmprendimiento}</p>
        <p> {ubicacionDisponible ? '' : 'Ubicación no disponible'} </p>
        <img src="src\assets\3891670.png" alt="" className="imagen-empresarial" />
        <footer>Contacto: {correo}</footer>

        {
        
      
        nombreComercio != '' ? (
          <Ver_detalle_comercio
            nombreComercio={nombreComercio}
            direccionComercio={direccionComercio}
            descripcionGeneral={descripcionGeneral}
            rubroComercio={rubroComercio}
            contactoComercio={contactoComercio}
            formasPago={formasPago}
            redesSociales={redesSociales}
            restricciones={restricciones}
            zonaInfluencia={zonaInfluencia} />
        ) : (
          <></>
        )}

      </div>
      {ubicacionDisponible && <DibujarMapa position={position} nombreEmprendimiento={nombreEmprendimiento} />}
    </div>
  );
};

const Ver_detalle_comercio = ({

  nombreComercio,
  direccionComercio,
  descripcionGeneral,
  rubroComercio,
  contactoComercio,
  formasPago,
  redesSociales,
  restricciones,
  zonaInfluencia
}) => {

  
 

    return (
      <>
        <p>Nombre Comercio: {nombreComercio}</p>
        <p>Dirección Comercio: {direccionComercio}</p>
        <p>Descripción General: {descripcionGeneral}</p>
        <p>Rubro Comercio: {rubroComercio}</p>
        <p>Contacto Comercio: {contactoComercio}</p>
        <p>Formas de Pago: {formasPago}</p>
        <p>Redes Sociales: {redesSociales}</p>
        <p>Restricciones: {restricciones}</p>
        <p>Zona de Influencia: {zonaInfluencia}</p>
  
      </>
    );

  
}
export default VerDetalle;
