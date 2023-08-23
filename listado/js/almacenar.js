limpiar.addEventListener("click", function() {
    contenedor.innerHTML = "";
    localStorage.removeItem("items");
  });