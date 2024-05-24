export const NormalizarUbicaciones = async (ubicacion) => {
  try {
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURI(ubicacion)}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.direccionesNormalizadas && data.direccionesNormalizadas.length > 0) {
      if (data.direccionesNormalizadas.length > 1) {
        throw new Error('Múltiples posibles ubicaciones encontradas. Por favor, sea más específico.');
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
