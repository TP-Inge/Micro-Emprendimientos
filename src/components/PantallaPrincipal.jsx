import React, { useEffect, useState } from "react";
import "../css/pantallaPrincipal.css";
import RegistrarForm from "./RegistrarForm";
import {Emprendimientos} from '../components/Emprendimientos'
import handleAniadirEmprendimientos from '../functions/aniadirEmprendimientos'
import añadir_harcodeado from '../functions/añadir_harcodeado'

export const PantallaPrincipal = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  useEffect(() => {
    const isEmprendimientosAdded = localStorage.getItem("isEmprendimientosAdded");
    if (!isEmprendimientosAdded) {
      
      localStorage.setItem("isEmprendimientosAdded", "true");
    }
  }, []);
  
  
  
  return (
    <div className="container">
      <section className="search-section">
        {mostrarFormulario ? (
          <RegistrarForm
            setMostrarFormulario={setMostrarFormulario}
          />
        ) : (
          <Emprendimientos setMostrarFormulario={setMostrarFormulario} />
        )}
      </section>
    </div>
  );
};

export default PantallaPrincipal;
