import React from "react";
import listaEmprendimientos from '../assets/ListaDeEmprendimientos'

const Emprendimientos = () => {
  return (
    <>
      <ol>
        {listaEmprendimientos.map((emprendimiento, index) => (
          <li key={index}>{emprendimiento}</li>
        ))}
      </ol>
    </>
  );
};

export default Emprendimientos;
