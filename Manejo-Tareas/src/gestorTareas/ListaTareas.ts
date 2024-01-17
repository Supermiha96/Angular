// ListaTareas.ts
import Tarea from './Tarea';

class ListaTareas {
  private tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  agregarTarea(descripcion: string, prioridad: string): void {
    const nuevaTarea = new Tarea(this.tareas.length + 1, descripcion, prioridad);
    this.tareas.push(nuevaTarea);
  }

  asignarTarea(id: number, usuario: string): void {
    const tarea = this.tareas.find(t => t.obtenerId() === id);
    if (tarea) {
      tarea.asignarTarea(usuario);
    }
  }

  completarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.obtenerId() === id);
    if (tarea) {
      tarea.completarTarea();
    }
  }

  obtenerTodasLasTareas(): string[] {
    return this.tareas.map(t => t.obtenerInformacion());
  }
}


export default ListaTareas;

