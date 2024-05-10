import React, { useState } from "react";
import "../css/pantallaPrincipal.css";
import RegistrarForm from "./RegistrarForm";
import Emprendimientos from './Emprendimientos'


export const PantallaPrincipal = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleRegistrar = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className="container">
      <section className="search-section">
        {mostrarFormulario ? (
          <RegistrarForm />
        ) : (
          <>
            <h1>Busca Emprendimientos</h1>
            <button id="register_button" onClick={handleRegistrar}>
                Registrar Emprendimiento
              </button>
            <div className="search-bar">
              <input type="text" placeholder="Buscar emprendimientos..." />
              <button>Buscar</button>
            </div>
            <section className="emprendimientos-section">
            
            </section>
            <h2>Lista de Emprendimientos</h2>
            <Emprendimientos/>
          </>
        )}
      </section>
    </div>
  );
};

export default PantallaPrincipal;
