import React, { useEffect, useState } from "react";
import "../css/pantallaPrincipal.css";
import RegistrarForm from "./RegistrarForm";
import { Emprendimientos } from "../components/Emprendimientos";
import handleAniadirEmprendimientos from "../functions/aniadirEmprendimientos";

export const PantallaPrincipal = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    const isEmprendimientosAdded = localStorage.getItem(
      "isEmprendimientosAdded"
    );
    if (!isEmprendimientosAdded) {
      handleAniadirEmprendimientos();
      localStorage.setItem("isEmprendimientosAdded", "true");
    }
  }, []);

  return (
    <div className="container">
      <section className="search-section">
        {mostrarFormulario ? (
          <RegistrarForm setMostrarFormulario={setMostrarFormulario} />
        ) : (
          <Emprendimientos setMostrarFormulario={setMostrarFormulario} />
        )}
      </section>
    </div>
  );
};

export default PantallaPrincipal;
