import React, { useEffect, useState } from "react";
import VerDetalle from './VerDetalle';
import axios from 'axios';
import "../css/pantallaPrincipal.css";

const Emprendimientos = () => {
  const [verDetalle, setVerDetalle] = useState(false);
  const [indiceEmprendimiento, setIndiceEmprendimiento] = useState(null);
  const [emprendimientos, setEmprendimientos] = useState([]);
  

  const handleVerDetalle = (index) => {
    setIndiceEmprendimiento(index);
    setVerDetalle(true);
  };



  useEffect(() => {
    const localStorageData = localStorage.getItem('emprendimientos');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setEmprendimientos(parsedData);
    }
  }, []);
  

  return (
    <>
      {verDetalle ? (
        <VerDetalle 
          nombreEmprendimiento={emprendimientos[indiceEmprendimiento].nombre} 
          descripcionEmprendimiento={emprendimientos[indiceEmprendimiento].descripcion} 
        />
      ) : (
        <div className="grid-container">
          {emprendimientos.map((emprendimiento, index) => (
            <div className="grid-item" key={index}>
              <div id="titulo">{emprendimiento.nombre}</div>
              <img src="../assets/3891670.png" alt="" />
              <div>{emprendimiento.descripcion}</div>
              <button onClick={() => handleVerDetalle(index)}>
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Emprendimientos;
