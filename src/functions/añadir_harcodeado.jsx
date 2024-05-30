const añadir_harcodeado = () => {

    let nuevoEmprendimiento =  {
      id: (Date.now() + 2).toString(),
      nombre: "Restaurante El Sabor",
      telefono: "456-789-0123",
      correo: "info@elsaborrestaurante.com",
      descripcion: "Restaurante con una amplia carta de comida local e internacional.",
      ubicacion: "Plaza Principal 789, Ciudad, País",
      vinculoOrganizacion: "https://www.elsaborrestaurante.com",
      coordenada: {
        x: -58.700481,
        y: -34.522804
      },
      ubicacionDisponible: true
    }
  
    const localStorageData = localStorage.getItem('emprendimientos');
    const emprendimientos = localStorageData ? JSON.parse(localStorageData) : [];
  
    emprendimientos.push(nuevoEmprendimiento);
  
    const jsonData = JSON.stringify(emprendimientos);
    localStorage.setItem('emprendimientos', jsonData);
  }

  export default añadir_harcodeado;