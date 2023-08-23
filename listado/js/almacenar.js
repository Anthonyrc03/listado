document.addEventListener('DOMContentLoaded', function() {
    const agregarButton = document.getElementById('agregar');
    const contenedor = document.getElementById('contenedor');
    const itemInput = document.getElementById('item');

    agregarButton.addEventListener('click', function() {
      const nuevoItem = itemInput.value;
      if (nuevoItem.trim() !== '') {
        const nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.className = 'list-group-item';
        nuevoElementoLista.textContent = nuevoItem;
        contenedor.appendChild(nuevoElementoLista);
        itemInput.value = ''; 
      }
    });
  });