
limpiar.addEventListener("click", function() {
    contenedor.innerHTML = "";
    localStorage.removeItem("items");
  });



document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");
    const itemInput = document.getElementById("item");
    const agregarBtn = document.getElementById("agregar");
    const limpiarBtn = document.getElementById("limpiar");
  
    const listadoGuardado = JSON.parse(localStorage.getItem("listado")) || [];   
    
    
    function actualizarVista() {
      contenedor.innerHTML = ""; 

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
          itemInput.value = "";
        }
      });

  limpiarBtn.addEventListener("click", function () {
    listadoGuardado.length = 0;
    localStorage.removeItem("listado"); 
    actualizarVista();
  });

  actualizarVista();

  });
  

  

  

