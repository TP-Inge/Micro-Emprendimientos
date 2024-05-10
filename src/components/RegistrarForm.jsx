import React, { useState } from 'react';
import "../css/registroForm.css";
import { NormalizarUbicaciones } from './NormalizarUbicaciones'; 

const RegistrarForm = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState('');
  const [descripcionEmprendimiento, setDescripcionEmprendimiento] = useState('');
  const [ubicacionEmprendimiento, setUbicacionEmprendimiento] = useState('');
  const [vinculoOrganizacion, setVinculoOrganizacion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const coordenadas = await NormalizarUbicaciones(ubicacionEmprendimiento);
      console.log({
        coordenadas, 
      });
    } catch (error) {
      console.error('Error al normalizar la ubicación:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Colaborador</h2>
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
        <label htmlFor="nombreEmprendimiento">Nombre del Emprendimiento:</label>
        <input type="text" id="nombreEmprendimiento" value={nombreEmprendimiento} onChange={(e) => setNombreEmprendimiento(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="descripcionEmprendimiento">Descripción del Emprendimiento:</label>
        <textarea id="descripcionEmprendimiento" value={descripcionEmprendimiento} onChange={(e) => setDescripcionEmprendimiento(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="ubicacionEmprendimiento">Ubicación del Emprendimiento:</label>
        <input type="text" id="ubicacionEmprendimiento" value={ubicacionEmprendimiento} onChange={(e) => setUbicacionEmprendimiento(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="vinculoOrganizacion">Vínculo con la Organización:</label>
        <input type="text" id="vinculoOrganizacion" value={vinculoOrganizacion} onChange={(e) => setVinculoOrganizacion(e.target.value)} required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrarForm;
