import React, { useEffect, useState } from "react";
import { NormalizarUbicaciones } from "./NormalizarUbicaciones";
import "../css/registroForm.css";
import DibujarMapa from "./DibujarMapa";
import FormComercio from "./FormComercio";

const RegistrarForm = ({ setMostrarFormulario }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState("");
  const [descripcionEmprendimiento, setDescripcionEmprendimiento] =
    useState("");
  const [ubicacionEmprendimiento, setUbicacionEmprendimiento] = useState("");
  const [vinculoOrganizacion, setVinculoOrganizacion] = useState("");
  const [ubicacionDisponible, setUbicacionDisponible] = useState(true);
  const [ubicacionValidada, setUbicacionValidada] = useState(false);
  const [coordenada, setCoordenada] = useState({ x: -58.3816, y: -34.6037 });
  const [comercioDisponible, setComercioDisponible] = useState(false);

  const [nombreComercio, setNombreComercio] = useState("");
  const [direccionComercio, setDireccionComercio] = useState("");
  const [descripcionGeneral, setDescripcionGeneral] = useState("");
  const [rubroComercio, setRubroComercio] = useState("");
  const [contactoComercio, setContactoComercio] = useState("");
  const [formasPago, setFormasPago] = useState("");
  const [redesSociales, setRedesSociales] = useState("");
  const [restricciones, setRestricciones] = useState("");
  const [zonaInfluencia, setZonaInfluencia] = useState("");

  var direcciones;
  const handleValidar = async (e) => {
    e.preventDefault();
    try {
      direcciones = await NormalizarUbicaciones(ubicacionEmprendimiento);

      if (direcciones.length === 0) {
        alert("Debe ingresar una dirección válida.");
        return;
      }

      const coordenadas = {
        x: direcciones.x,
        y: direcciones.y,
      };

      setCoordenada(coordenadas);
      setUbicacionValidada(true);
    } catch (error) {
      setUbicacionValidada(false);
      if (error.message === "Debe ingresar la altura en la dirección.") {
        alert("Debe ingresar una altura.");
      } else if (
        error.message === "Debe ingresar el nombre del partido en la dirección."
      ) {
        alert("Debe ingresar el nombre del partido en la dirección.");
      } else if (error.message === "Debe ser más específico en la ubicación.") {
        alert("Debe ser más específico en la ubicación.");
      } else {
        console.error("Error al normalizar la ubicación:", error);
        alert(
          "Error al normalizar la ubicación. Por favor, intente nuevamente."
        );
      }
    }
  };

  const handleSubmit = () => {
    if (ubicacionValidada && ubicacionEmprendimiento !== "") {
      const nuevoEmprendimiento = {
        id: Date.now().toString(),
        nombre: nombreEmprendimiento,
        telefono: telefono,
        correo: correo,
        descripcion: descripcionEmprendimiento,
        ubicacion: ubicacionEmprendimiento,
        vinculoOrganizacion: vinculoOrganizacion,
        coordenada: coordenada,
        ubicacionDisponible: ubicacionDisponible,

        nombreComercio: nombreComercio,
        direccionComercio: direccionComercio,
        descripcionGeneral: descripcionGeneral,
        rubroComercio: rubroComercio,
        contactoComercio: contactoComercio,
        formasPago: formasPago,
        redesSociales: redesSociales,
        restricciones: restricciones,
        zonaInfluencia: zonaInfluencia,
      };

      const localStorageData = localStorage.getItem("emprendimientos");
      const emprendimientos = localStorageData
        ? JSON.parse(localStorageData)
        : [];

      emprendimientos.push(nuevoEmprendimiento);

      const jsonData = JSON.stringify(emprendimientos);
      localStorage.setItem("emprendimientos", jsonData);
      setMostrarFormulario(false);
    } else {
      alert("Debe validar la ubicacion");
    }
  };

  useEffect(() => {
    setUbicacionValidada(false);
  }, [ubicacionEmprendimiento]);

  const handleCancelarRegistro = () => {
    setMostrarFormulario(false);
  };

  return (
    <>
      <div className="container">
        {comercioDisponible && (
          <FormComercio
            setNombreComercio={setNombreComercio}
            setDireccionComercio={setDireccionComercio}
            setDescripcionGeneral={setDescripcionGeneral}
            setRubroComercio={setRubroComercio}
            setContactoComercio={setContactoComercio}
            setFormasPago={setFormasPago}
            setRedesSociales={setRedesSociales}
            setRestricciones={setRestricciones}
            setZonaInfluencia={setZonaInfluencia}
          />
        )}
        <div className="form-container">
          <h2>Registrar Emprendimiento</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombreEmprendimiento">
                Nombre del Emprendimiento:
              </label>
              <input
                type="text"
                id="nombreEmprendimiento"
                value={nombreEmprendimiento}
                onChange={(e) => setNombreEmprendimiento(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="descripcionEmprendimiento">
                Descripción del Emprendimiento:
              </label>
              <textarea
                className="descripcion-emprendimiento"
                id="descripcionEmprendimiento"
                value={descripcionEmprendimiento}
                onChange={(e) => setDescripcionEmprendimiento(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="ubicacionEmprendimiento">
                Ubicación del Emprendimiento:
              </label>
              <input
                type="text"
                id="ubicacionEmprendimiento"
                value={ubicacionEmprendimiento}
                onChange={(e) => setUbicacionEmprendimiento(e.target.value)}
                required
              />
              <div className="container-boton-validar">
                <button className="boton-validar" onClick={handleValidar}>
                  {" "}
                  Validar
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="vinculoOrganizacion">
                Vínculo con la Organización:
              </label>
              <input
                type="text"
                id="vinculoOrganizacion"
                value={vinculoOrganizacion}
                onChange={(e) => setVinculoOrganizacion(e.target.value)}
                required
              />
            </div>
            <div className="container-checkbox">
              <div>
                <label htmlFor="ubicacionDisponible" id="ubi_disponible">
                  Ubicación Disponible:
                </label>
                <input
                  type="checkbox"
                  id="ubicacionDisponible"
                  checked={ubicacionDisponible}
                  onChange={(e) => setUbicacionDisponible(e.target.checked)}
                />
              </div>
              <label htmlFor="comercioDisponible" id="comercio_button">
                Tiene comercio:
              </label>
              <input
                type="checkbox"
                id="comercio_input"
                checked={comercioDisponible}
                onChange={(e) => setComercioDisponible(e.target.checked)}
              />
              <div></div>
            </div>
            <div className=" buttons">
              {ubicacionValidada && <button type="submit">Registrarse</button>}
              <button type="cancelar" onClick={handleCancelarRegistro}>
                Cancelar registro
              </button>
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

          <DibujarMapa
            position={[coordenada.y, coordenada.x]}
            nombreEmprendimiento={nombreEmprendimiento}
            ubicacionValidada={ubicacionValidada}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrarForm;
