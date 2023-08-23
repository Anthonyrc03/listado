function actualizar() {
    contenedor.innerHTML = '';
    listadoGuardado.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      contenedor.appendChild(li);
    });
  }
