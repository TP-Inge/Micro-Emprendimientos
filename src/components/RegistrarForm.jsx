import React, { useState } from 'react';
import "../css/registroForm.css";
import { NormalizarUbicaciones } from './NormalizarUbicaciones'; 

const RegistrarForm = ({ setMostrarFormulario }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState('');
  const [descripcionEmprendimiento, setDescripcionEmprendimiento] = useState('');
  const [ubicacionEmprendimiento, setUbicacionEmprendimiento] = useState('');
  const [vinculoOrganizacion, setVinculoOrganizacion] = useState('');
  const [ubicacionDisponible, setUbicacionDisponible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const coordenadas = await NormalizarUbicaciones(ubicacionEmprendimiento);
      
      if (!coordenadas.x || !coordenadas.y) {
        alert('Debe ingresar una dirección válida.');
        return;
      }
      
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
  
    } catch (error) {
      if (error.message === 'Múltiples posibles ubicaciones encontradas. Por favor, sea más específico.') {
        alert('Se encontraron múltiples posibles ubicaciones. Por favor, sea más específico.');
      } else {
        console.error('Error al normalizar la ubicación:', error);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Colaborador</h2>
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
        <input type="text" id="ubicacionEmprendimiento" value={ubicacionEmprendimiento} onChange={(e) => setUbicacionEmprendimiento(e.target.value)} required />
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
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistrarForm;
