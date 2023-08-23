

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");
    const itemInput = document.getElementById("item");
    const agregarBtn = document.getElementById("agregar");
    const limpiarBtn = document.getElementById("limpiar");
  
    // Cargar el listado desde el almacenamiento local al iniciar
    const listadoGuardado = JSON.parse(localStorage.getItem("listado")) || [];   
    
    
    // Función para actualizar la vista del listado
    function actualizarVista() {
      contenedor.innerHTML = ""; // Limpiar el contenido actual
      
      for (const item of listadoGuardado) {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "list-group-item";
        contenedor.appendChild(li);
      }
    }
  
  });
  

  

  

