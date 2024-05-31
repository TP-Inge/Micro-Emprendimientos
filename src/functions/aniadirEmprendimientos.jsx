const handleAniadirEmprendimientos = () => {
  localStorage.removeItem("emprendimientos");

  const nuevosEmprendimientos = [
    {
      id: Date.now().toString(),
      nombre: "Café Central",
      telefono: "123-456-7890",
      correo: "cafecentral@gmail.com",
      descripcion: "Cafetería con ambiente acogedor y variedad de café.",
      ubicacion: "Calle Principal 123, Ciudad, País",
      vinculoOrganizacion: "https://www.cafecentral.com",
      nombreComercio: "",
      coordenada: {
        x: -34.6037,
        y: -58.3816,
      },
      ubicacionDisponible: false,
    },
    {
      id: (Date.now() + 1).toString(),
      nombre: "Tienda de Ropa Fashion",
      telefono: "987-654-3210",
      correo: "info@tiendaropafashion.com",
      descripcion:
        "Tienda de ropa para hombres y mujeres con las últimas tendencias de moda.",
      ubicacion: "Avenida Comercial 456, Ciudad, País",
      vinculoOrganizacion: "https://www.tiendaropafashion.com",
      nombreComercio: "",
      coordenada: {
        x: -34.522804,
        y: -58.700481,
      },
      ubicacionDisponible: false,
    },
    {
      id: (Date.now() + 2).toString(),
      nombre: "Restaurante El Sabor",
      telefono: "456-789-0123",
      correo: "info@elsaborrestaurante.com",
      descripcion:
        "Restaurante con una amplia carta de comida local e internacional.",
      ubicacion: "Plaza Principal 789, Ciudad, País",
      vinculoOrganizacion: "https://www.elsaborrestaurante.com",
      nombreComercio: "",
      coordenada: {
        x: -58.700481,
        y: -34.522804,
      },
      ubicacionDisponible: true,
    },
  ];

  let emprendimientos =
    JSON.parse(localStorage.getItem("emprendimientos")) || [];
  emprendimientos = emprendimientos.concat(nuevosEmprendimientos);
  localStorage.setItem("emprendimientos", JSON.stringify(emprendimientos));
};

export default handleAniadirEmprendimientos;
