import "../css/buscarEmprendimiento.css"


export const BuscarEmprendimiento = ({setMostrarFormulario} ) => {
    

    const handleRegistrar = () => {
      setMostrarFormulario(true);
    };
  
  return (
    <>
        <h1>Busca Emprendimientos</h1>
          <button id="register_button" onClick={handleRegistrar}>
              Registrar Emprendimiento
            </button>
            <div className="search-bar">
              <input type="text" placeholder="Buscar emprendimientos..." />
              <button>Buscar</button>
            </div>
            <section className="emprendimientos-section"></section>
            <h2>Lista de Emprendimientos</h2>
          </>
  )
}
