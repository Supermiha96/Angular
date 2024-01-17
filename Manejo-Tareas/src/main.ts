import './style.css'
import ListaTareas from './gestorTareas/ListaTareas';
import Almacenamiento from './gestorTareas/Almacenamiento';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="app">
    <div id="formulario">
      <input id="descripcion" placeholder="Descripción de la tarea" />
      <select id="prioridad">
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <button id="agregar-tarea-btn">Agregar Tarea</button>
    </div>
    <div id="lista-tareas"></div>
  </div>
`;

const listaTareas = new ListaTareas();

// Restaurar tareas desde el almacenamiento si existen
const tareasGuardadas = Almacenamiento.obtenerDatos('tareas');

if (tareasGuardadas) {
  tareasGuardadas.forEach((tarea: any) => {
    listaTareas.agregarTarea(tarea.descripcion, tarea.prioridad);
  });
}

function inicializarListaTareas(): void {
  const listaTareasElement = document.getElementById('lista-tareas');

  // Verificar si el elemento existe antes de manipularlo
  if (listaTareasElement) {
    listaTareasElement.innerHTML = '';
    listaTareas.obtenerTodasLasTareas().forEach((tarea: string) => {
      const tareaElement = document.createElement('div');
      tareaElement.innerHTML = tarea;
      listaTareasElement?.appendChild(tareaElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inicializarListaTareas();
});

// Event listener para el botón de agregar tarea
const agregarTareaBtn = document.getElementById('agregar-tarea-btn');

if (agregarTareaBtn) {
  agregarTareaBtn.addEventListener('click', agregarTarea);
}

function agregarTarea(): void {
  const descripcionInput = document.getElementById('descripcion') as HTMLInputElement;
  const prioridadSelect = document.getElementById('prioridad') as HTMLSelectElement;

  const descripcion = descripcionInput.value;
  const prioridad = prioridadSelect.value;

  listaTareas.agregarTarea(descripcion, prioridad);

  // Guardar tareas en el almacenamiento
  Almacenamiento.guardarDatos('tareas', listaTareas.obtenerTodasLasTareas());

  // Actualizar la lista visualmente
  inicializarListaTareas();
}



