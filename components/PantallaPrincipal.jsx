import React, { useState } from "react";
import "../css/pantallaPrincipal.css";
import RegistrarForm from "../components/RegistrarForm";
import emprendimientos from '../assets/ListaDeEmprendimientos'

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
            <div className="search-bar">
              <input type="text" placeholder="Buscar emprendimientos..." />
              <button>Buscar</button>
            </div>
            <section className="emprendimientos-section">
              <button onClick={handleRegistrar}>
                Registrar Emprendimiento
              </button>
            </section>
            <h2>Lista de Emprendimientos</h2>
            <ol>
              {emprendimientos.map((emprendimiento, index) => (
                <li key={index}>{emprendimiento}</li>
              ))}
            </ol>
          </>
        )}
      </section>
    </div>
  );
};

export default PantallaPrincipal;
