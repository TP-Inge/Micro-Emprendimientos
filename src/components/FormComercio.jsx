
const FormComercio = ({
    setNombreComercio,
    setDireccionComercio,
    setDescripcionGeneral,
    setRubroComercio,
    setContactoComercio,
    setFormasPago,
    setRedesSociales,
    setRestricciones,
    setZonaInfluencia,
  }) => {
    return (
      <>
        <div className="form-comercio-container">
          <div>
            <label htmlFor="nombreComercio" required>
              Nombre del Comercio:
            </label>
            <input
              type="text"
              id="nombreComercio"
              onChange={(e) => setNombreComercio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="direccionComercio" required>
              Dirección del Comercio:
            </label>
            <input
              type="text"
              id="direccionComercio"
              onChange={(e) => setDireccionComercio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="descripcionGeneral" required>
              Descripción general:
            </label>
            <input
              type="text"
              id="descripcionGeneral"
              onChange={(e) => setDescripcionGeneral(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rubroComercio" required>
              Rubro:
            </label>
            <input
              type="text"
              id="rubroComercio"
              onChange={(e) => setRubroComercio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contactoComercio" required>
              Forma de contacto:
            </label>
            <input
              type="text"
              id="contactoComercio"
              onChange={(e) => setContactoComercio(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="formasPago" required>
              Formas de pago:
            </label>
            <input
              type="text"
              id="formasPago"
              onChange={(e) => setFormasPago(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="redesSociales" required>
              Redes sociales:
            </label>
            <input
              type="text"
              id="redesSociales"
              onChange={(e) => setRedesSociales(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="restricciones" required>
              Restricciones:
            </label>
            <input
              type="text"
              id="restricciones"
              onChange={(e) => setRestricciones(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="zonaInfluencia" required>
              Zona de influencia:
            </label>
            <input
              type="text"
              id="zonaInfluencia"
              onChange={(e) => setZonaInfluencia(e.target.value)}
            />
          </div>
        </div>
      </>
    );
  };

  export default FormComercio;