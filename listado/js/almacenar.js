// almacenar.js

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");
    const itemInput = document.getElementById("item");
    const agregarBtn = document.getElementById("agregar");
    const limpiarBtn = document.getElementById("limpiar");
  
    // Cargar el listado desde el almacenamiento local al iniciar
    const listadoGuardado = JSON.parse(localStorage.getItem("listado")) || [];
  
})
  