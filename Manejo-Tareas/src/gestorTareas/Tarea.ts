// Tarea.ts
class Tarea {
  private id: number;
  private descripcion: string;
  private completada: boolean;
  private asignadaA?: string;
  private prioridad: string;

  constructor(id: number, descripcion: string, prioridad: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = false;
    this.prioridad = prioridad;
  }

  asignarTarea(usuario: string): void {
    this.asignadaA = usuario;
  }

  completarTarea(): void {
    this.completada = true;
  }

  obtenerId(): number {
    return this.id;
  }

  obtenerInformacion(): string {
    const estado = this.completada ? 'completada' : 'pendiente';
    const asignacion = this.asignadaA ? ` asignada a ${this.asignadaA}` : '';
    return `Tarea ${this.id}: ${this.descripcion} - Prioridad: ${this.prioridad} - Estado: ${estado}${asignacion}`;
  }
}

export default Tarea;

  
  
  
  