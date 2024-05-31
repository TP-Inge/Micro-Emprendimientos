export const NormalizarUbicaciones = async (ubicacion) => {
  try {
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(ubicacion)}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.direccionesNormalizadas.length === 0) {
      throw new Error("Calle inexistente");
    }

    const direccion = data.direccionesNormalizadas[0];

    if (direccion.tipo === "calle_y_calle" && !direccion.direccion.includes(direccion.cod_partido)) {
      throw new Error("Debe ingresar el código de partido en la dirección.");
    }

    if (direccion.tipo === "calle") {
      throw new Error("Debe ser más específico en la ubicación.");
    }

    return {
      x: direccion.coordenadas.x,
      y: direccion.coordenadas.y
    };
  } catch (error) {
    console.error('Error al normalizar la ubicación:', error);
    throw error;
  }
};
