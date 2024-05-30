import React, { useEffect, useState } from "react";
import VerDetalle from './VerDetalle';
import "../css/pantallaPrincipal.css";
import { BuscarEmprendimiento } from '../components/BuscarEmprendimiento';

export const Emprendimientos = ({ setMostrarFormulario }) => {
  const [verDetalle, setVerDetalle] = useState(false);
  const [indiceEmprendimiento, setIndiceEmprendimiento] = useState(null);
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleVerDetalle = (index) => {
    setIndiceEmprendimiento(index);
    setVerDetalle(true);
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem('emprendimientos');
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setEmprendimientos(parsedData);
    }
  }, []);

  const handleBuscar = (term) => {
    setSearchTerm(term);
  };

  const filteredEmprendimientos = emprendimientos.filter((emprendimiento) =>
    emprendimiento.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emprendimiento.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {verDetalle ? (
        <VerDetalle 
          nombreEmprendimiento={emprendimientos[indiceEmprendimiento].nombre} 
          descripcionEmprendimiento={emprendimientos[indiceEmprendimiento].descripcion} 
          coordenadaX={emprendimientos[indiceEmprendimiento].coordenada.x}
          coordenadaY={emprendimientos[indiceEmprendimiento].coordenada.y}
          ubicacionDisponible={emprendimientos[indiceEmprendimiento].ubicacionDisponible}
          correo={emprendimientos[indiceEmprendimiento].correo}
          setVerDetalle={setVerDetalle}
          />
      ) : (
        <div>
          <BuscarEmprendimiento onBuscar={handleBuscar} setMostrarFormulario={setMostrarFormulario} />
          <div className="grid-container">
            {filteredEmprendimientos.map((emprendimiento, index) => (
              <div className="grid-item" key={index}>
                <div id="titulo">{emprendimiento.nombre}</div>
                <div>{emprendimiento.descripcion}</div>
                <button onClick={() => handleVerDetalle(index)}>
                  Ver detalle
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Emprendimientos;
