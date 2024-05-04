import React from "react";
import listaEmprendimientos from '../assets/ListaDeEmprendimientos'

const Emprendimientos = () => {

    const handleVerDetalle = (index)=> {
        console.log(listaEmprendimientos[index] )
    }

  return (
    <>
      <ol>
        {listaEmprendimientos.map((emprendimiento, index) => (
          <li key={index}>
            {emprendimiento}
            <button onClick={() => handleVerDetalle(index)} >Ver detalle</button> 
          </li>
        ))}
      </ol>
    </>
  );
};

export default Emprendimientos;
