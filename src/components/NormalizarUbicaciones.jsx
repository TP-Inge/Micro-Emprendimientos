/*export const NormalizarUbicaciones = async (ubicacion) => {
  try {
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURI(
      ubicacion
    )}`;
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(
        `Error en la solicitud: ${resp.status} ${resp.statusText}`
      );
    }

    const data = await resp.json();

    if (
      data.direccionesNormalizadas &&
      data.direccionesNormalizadas.length > 0
    ) {
      const direcciones = data.direccionesNormalizadas.map((direccion) => {
        if (
          !direccion.coordenadas ||
          typeof direccion.coordenadas.x !== "number" ||
          typeof direccion.coordenadas.y !== "number" ||
          !direccion.direccion ||
          !direccion.tipo
        ) {
          throw new Error(
            "Coordenadas o datos de dirección no válidos en la respuesta."
          );
        }

        return {
          direccionCompleta: direccion.direccion,
          coordenadas: {
            x: direccion.coordenadas.x,
            y: direccion.coordenadas.y,
          },
          tipo: direccion.tipo,
        };
      });

      for (const direccion of direcciones) {
        if (direccion.tipo === "calle_calle" && direcciones.length > 1) {
          throw new Error("Debe ingresar una altura.");
        } else if (direccion.tipo === "calle") {
          throw new Error("Debe ser más específico en la ubicación.");
        }
      }
     return direcciones;
    } else {
      throw new Error("No se encontraron direcciones normalizadas.");
    }
  } catch (error) {
    console.error("Error al normalizar la ubicación:", error);
    throw error;
  }
};*/




export const NormalizarUbicaciones = async (ubicacion) => {
  try {
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURI(
      ubicacion
    )}`;
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(
        `Error en la solicitud: ${resp.status} ${resp.statusText}`
      );
    }

    const data = await resp.json();

    if (
      data.direccionesNormalizadas &&
      data.direccionesNormalizadas.length > 1
    ) {
      const direcciones = data.direccionesNormalizadas.map((direccion) => {
        if (!direccion.direccion.includes(direccion.cod_partido)) {
          throw new Error( "Debe ingresar el partido");
        }
        else if(direccion.altura && !direccion.direccion.includes(direccion.altura)){
          throw new Error("Debe especificar la altura")
        }
        

        return {
          direccionCompleta: direccion.direccion,
          coordenadas: {
            x: direccion.coordenadas.x,
            y: direccion.coordenadas.y,
          },
          tipo: direccion.tipo,
        };
      });

     return direcciones;
    } else {
      throw new Error("No se encontraron direcciones normalizadas.");
    }
  } catch (error) {
    console.error("Error al normalizar la ubicación:", error);
    throw error;
  }
};
