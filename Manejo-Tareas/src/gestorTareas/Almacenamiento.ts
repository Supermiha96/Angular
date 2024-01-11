// Almacenamiento.ts
class Almacenamiento {
    private static datos: Record<string, any> = {};
  
    static guardarDatos(clave: string, datos: any): void {
      this.datos[clave] = datos;
    }
  
    static obtenerDatos(clave: string): any | undefined {
      return this.datos[clave];
    }
  }
  
  export default Almacenamiento;
  