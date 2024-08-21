const listaTareas = document.getElementById('taskList');

function agregarTarea() {
    const tarea = document.getElementById('taskInput').value.trim();
    if (tarea !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);

        const btnEliminar = document.createElement('button');
        btnEliminar.style.backgroundColor = '#f03f33';
        btnEliminar.textContent = 'Eliminar Tarea';
        nuevaTarea.appendChild(btnEliminar);
        btnEliminar.addEventListener('click', eliminarTarea);
    } else {
        alert('No ha ingresado ninguna tarea');
    }
}
function eliminarTarea(event) {
  const btn = event.target;
  const tarea = btn.parentNode;
  tarea.remove();
  alert('Tarea eliminada con exito')
}