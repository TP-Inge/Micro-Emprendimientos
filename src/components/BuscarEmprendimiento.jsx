import React, { useState } from "react";
import "../css/buscarEmprendimiento.css";

export const BuscarEmprendimiento = ({ setMostrarFormulario, onBuscar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleRegistrar = () => {
    setMostrarFormulario(true);
  };


 

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onBuscar(event.target.value);
  };
  return (
    <>
      <div>
        <button id="register_button" onClick={handleRegistrar}>
          Registrar Emprendimiento
        </button>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar emprendimientos..."
          value={searchTerm}
          onChange={handleChange} />
        <button>Buscar</button>
      </div>
      <section className="emprendimientos-section"></section>
      <h2>Lista de Emprendimientos</h2>
    </>
  );
};

export default BuscarEmprendimiento;