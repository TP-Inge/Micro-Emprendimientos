import Login from "../src/components/Login";
import { useState } from "react";
import { PantallaPrincipal } from "../src/components/PantallaPrincipal";

function App() {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = () => {

    const nuevosEmprendimientos = [
      {
        id: Date.now().toString(),
        nombre: "Emprendimiento 1",
        telefono: "123456789",
        correo: "emprendimiento1@ejemplo.com",
        descripcion: "Descripción del emprendimiento 1.",
        ubicacion: "Ubicación del emprendimiento 1",
        vinculoOrganizacion: "Vínculo con la organización 1",
        coordenadas: {
          x: -34.6037, 
          y: -58.3816
        },
        ubicacionDisponible: false
      },
      {
        id: (Date.now() + 1).toString(),
        nombre: "Emprendimiento 2",
        telefono: "987654321",
        correo: "emprendimiento2@ejemplo.com",
        descripcion: "Descripción del emprendimiento 2.",
        ubicacion: "Ubicación del emprendimiento 2",
        vinculoOrganizacion: "Vínculo con la organización 2",
        coordenadas: {
          x: -34.522804,
          y: -58.700481
        },
        ubicacionDisponible: false
      },
      {
        id: (Date.now() + 2).toString(),
        nombre: "Emprendimiento 3",
        telefono: "555666777",
        correo: "emprendimiento3@ejemplo.com",
        descripcion: "Descripción del emprendimiento 3.",
        ubicacion: "Ubicación del emprendimiento 3",
        vinculoOrganizacion: "Vínculo con la organización 3",
        coordenadas: {
          x: -58.700481,
          y: -34.522804
        },
        ubicacionDisponible: true
      }
    ];

  
    let emprendimientos = JSON.parse(localStorage.getItem("emprendimientos")) || [];


    emprendimientos = emprendimientos.concat(nuevosEmprendimientos);

   
    localStorage.setItem("emprendimientos", JSON.stringify(emprendimientos));

  
    setSubmit(true);
  };

  return (
    <>
      {!submit ? <Login handleSubmit={handleSubmit} /> : <PantallaPrincipal />}
    </>
  );
}

export default App;
