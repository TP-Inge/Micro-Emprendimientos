import React, { useState } from 'react';
import {NormalizarUbicaciones} from './NormalizarUbicaciones'
import "../css/registroForm.css";
import DibujarMapa from './DibujarMapa';

const RegistrarForm = ({ setMostrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState('');
  const [descripcionEmprendimiento, setDescripcionEmprendimiento] = useState('');
  const [ubicacionEmprendimiento, setUbicacionEmprendimiento] = useState('');
  const [vinculoOrganizacion, setVinculoOrganizacion] = useState('');
  const [ubicacionDisponible, setUbicacionDisponible] = useState(true);
  const [ubicacionValidada, setUbicacionValidada] = useState(false)
  const [coordenada, setCoordenada] =useState()

  
  const handleValidar = async (e) => {
    e.preventDefault();
    try {
      const direcciones = await NormalizarUbicaciones(ubicacionEmprendimiento);
      
      if (direcciones.length === 0) {
        alert('Debe ingresar una dirección válida.');
        return;
      }

      const coordenadas = {
        x: direcciones.x,
        y: direcciones.y
      };

      setCoordenada(coordenadas)
  
    } catch (error) {
      if (error.message === 'Debe ingresar la altura en la dirección.') {
        alert('Debe ingresar una altura.');
      } else if (error.message === 'Debe ingresar el código de partido en la dirección.') {
        alert('Debe ingresar el código de partido en la dirección.');
      } else if (error.message === 'Debe ser más específico en la ubicación.') {
        alert('Debe ser más específico en la ubicación.');
      } else {
        console.error('Error al normalizar la ubicación:', error);
        alert('Error al normalizar la ubicación. Por favor, intente nuevamente.');
      }
    }
    setUbicacionValidada(true)
    
  };
  
  const handleSubmit=()=>{
    const coordenadas = direcciones[0].coordenadas;
          
    const nuevoEmprendimiento = {
      id: Date.now().toString(),
      nombre: nombreEmprendimiento,
      telefono: telefono,
      correo: correo,
      descripcion: descripcionEmprendimiento,
      ubicacion: ubicacionEmprendimiento,
      vinculoOrganizacion: vinculoOrganizacion,
      coordenadas: coordenadas,
      ubicacionDisponible: ubicacionDisponible,
    };

    const localStorageData = localStorage.getItem('emprendimientos');
    const emprendimientos = localStorageData ? JSON.parse(localStorageData) : [];

    emprendimientos.push(nuevoEmprendimiento);

    const jsonData = JSON.stringify(emprendimientos);
    localStorage.setItem('emprendimientos', jsonData);

    setMostrarFormulario(false);
  }
  

  const handleCancelarRegistro = ()=>{
    setMostrarFormulario(false)
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Registrar Emprendimiento</h2>
        <form>
          <div>
            <label htmlFor="nombreEmprendimiento">Nombre del Emprendimiento:</label>
            <input type="text" id="nombreEmprendimiento" value={nombreEmprendimiento} onChange={(e) => setNombreEmprendimiento(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="descripcionEmprendimiento">Descripción del Emprendimiento:</label>
            <textarea id="descripcionEmprendimiento" value={descripcionEmprendimiento} onChange={(e) => setDescripcionEmprendimiento(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="ubicacionEmprendimiento">Ubicación del Emprendimiento:</label>
            <input type="text" id="ubicacionEmprendimiento"  value={ubicacionEmprendimiento} onChange={(e) => setUbicacionEmprendimiento(e.target.value)} required />
            <button onClick={handleValidar} > validar</button>
          </div>
          <div>
            <label htmlFor="vinculoOrganizacion">Vínculo con la Organización:</label>
            <input type="text" id="vinculoOrganizacion" value={vinculoOrganizacion} onChange={(e) => setVinculoOrganizacion(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="ubicacionDisponible">Ubicación Disponible:</label>
            <input
              type="checkbox"
              id="ubicacionDisponible"
              checked={ubicacionDisponible}
              onChange={(e) => setUbicacionDisponible(e.target.checked)}
            />
          </div>
          <div className=' buttons'>
            <button type="submit">Registrarse</button>
            <button type="cancelar"onClick={handleCancelarRegistro} >Cancelar registro</button>
          </div>
        </form>
      </div>
      <div className="preview-container">
        <h2>Previsualización</h2>
        <div className="preview-box">
          <h2> {nombreEmprendimiento} </h2>
          <p> {descripcionEmprendimiento} </p>
          <button>ver detalle</button>
        </div>

        {/*<div>
          {ubicacionValidada && <DibujarMapa position={coordenada}  nombreEmprendimiento={nombreEmprendimiento} /> }
  </div>*/}
      </div>
      
    </div>
  );
};

export default RegistrarForm;
