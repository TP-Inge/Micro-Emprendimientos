import React, { useState } from "react";
import listaEmprendimientos from "../assets/ListaDeEmprendimientos";
import VerDetalle from './VerDetalle';
import "../css/pantallaPrincipal.css";

const Emprendimientos = () => {
  const [verDetalle, setVerDetalle] = useState(false);
  const [indiceEmprendimiento, setIndiceEmprendimiento] = useState(null);

  const handleVerDetalle = (index) => {
    setIndiceEmprendimiento(index);
    setVerDetalle(true);
  };

  return (
    <>
      {verDetalle ? (
        <VerDetalle emprendimiento = {listaEmprendimientos[indiceEmprendimiento]} />
      ) : (
        
        <div className="grid-container">
          {listaEmprendimientos.map((emprendimiento, index) => (
            <div className="grid-item" key={index}>
          
          
              <div id="titulo">{emprendimiento}</div>
              <img src="../assets/3891670.png" alt="" />
              <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt ex ullam quod dolorem assumenda sit libero laboriosam tempora nam ratione quam nulla ab quae, atque eligendi eos cum ipsa!</div>
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
