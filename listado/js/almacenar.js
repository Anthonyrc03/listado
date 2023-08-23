

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

    agregarBtn.addEventListener("click", function () {
        const nuevoItem = itemInput.value.trim();
        if (nuevoItem !== "") {
          listadoGuardado.push(nuevoItem);
          localStorage.setItem("listado", JSON.stringify(listadoGuardado));
          actualizarVista();
          itemInput.value = ""; // Limpiar el campo de entrada de texto
        }
      });
  
  });
  

  

  

