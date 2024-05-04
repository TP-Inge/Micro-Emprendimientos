import React, { useState } from "react";
import listaEmprendimientos from "../assets/ListaDeEmprendimientos";
import VerDetalle from './VerDetalle';

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
        <VerDetalle emprendimiento={listaEmprendimientos[indiceEmprendimiento]} />
      ) : (
        <ol>
          {listaEmprendimientos.map((emprendimiento, index) => (
            <li key={index}>
              {emprendimiento}
              <button onClick={() => handleVerDetalle(index)}>
                Ver detalle
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Emprendimientos;
