import React from "react";
import "../css/pantallaPrincipal.css";
import { emprendimientos } from  "../assets/ListaDeEmprendimientos"

export const PantallaPrincipal = () => {
  

  return (
    <div className="container">
      <section className="search-section">
        <h1>Busca Emprendimientos</h1>
        <div className="search-bar">
          <input type="text" placeholder="Buscar emprendimientos..." />
          <button>Buscar</button>
        </div>
        <section className="emprendimientos-section">
          <button>Registrar Emprendimiento</button>
        </section>
        <div className="emprendimientos-list">
          <h2>Lista de Emprendimientos</h2>
          <ol>
            {emprendimientos.map((emprendimiento, index) => (
              <li key={index}>{emprendimiento}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default PantallaPrincipal;
