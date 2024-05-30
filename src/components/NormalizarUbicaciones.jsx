export const NormalizarUbicaciones = async (ubicacion) => {
  try {
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURI(ubicacion)}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
      if (data.direccionesNormalizadas.length > 1) {
        for (const direccion of data.direccionesNormalizadas) {
          if (direccion.tipo === "calle_y_calle") {
            if (!direccion.direccion.includes(direccion.cod_partido)) {
              throw new Error("Debe ingresar el código de partido en la dirección.");
            }
          } else if (direccion.tipo === "calle_altura") {
            if (!direccion.direccion.includes(direccion.altura)) {
              throw new Error("Debe ingresar la altura en la dirección.");
            }
          } else if (direccion.tipo === "calle") {
            throw new Error("Debe ser más específico en la ubicación.");
          }
        }
      }

      const coordenadas = {
        x: data.direccionesNormalizadas[0].coordenadas.x,
        y: data.direccionesNormalizadas[0].coordenadas.y
      };
      return coordenadas;
    } else {
      return { x: '', y: '' };
    }
  } catch (error) {
    console.error('Error al normalizar la ubicación:', error);
    throw error;
  }
};
