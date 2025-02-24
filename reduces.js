const productos = [
    { nombre: "Cargador", precio: 35 },
    { nombre: "Cabezita", precio: 95 },
    { nombre: "Memoria", precio: 5 },
    { nombre: "Cable Lan", precio: 799 },
    { nombre: "Control", precio: 1500 }
  ];
  
  const productoBuscado = productos.find(producto => producto.nombre === "Cabezita");
  console.log("Producto encontrado:", productoBuscado);
  
  const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);
  console.log("Total de la compra:", totalCompra);
  console.log("Lista de productos:", productos);

  
  
  