import './style.css'
import ListaTareas from './gestorTareas/ListaTareas';
import Almacenamiento from './gestorTareas/Almacenamiento';
/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>
<div id="app">
  <div id="formulario">
    <input id="descripcion" placeholder="Descripción de la tarea" />
    <select id="prioridad">
      <option value="Alta">Alta</option>
      <option value="Media">Media</option>
      <option value="Baja">Baja</option>
    </select>
    <button onclick="agregarTarea()">Agregar Tarea</button>
  </div>
  <div id="lista-tareas"></div>
</div>
`*/
// Restaurar tareas desde el almacenamiento si existen
const tareasGuardadas = Almacenamiento.obtenerDatos('tareas');
const listaTareas = new ListaTareas(tareasGuardadas || []);

listaTareas.agregarTarea('Hacer la compra', 'Alta');
listaTareas.agregarTarea('Preparar la presentación', 'Media');
listaTareas.agregarTarea('Revisar el código', 'Baja');

listaTareas.asignarTarea(1, 'Usuario1');
listaTareas.completarTarea(2);

// Guardar tareas en el almacenamiento
Almacenamiento.guardarDatos('tareas', listaTareas.obtenerTodasLasTareas());

const todasLasTareas = listaTareas.obtenerTodasLasTareas();
todasLasTareas.forEach(tarea => console.log(tarea));



