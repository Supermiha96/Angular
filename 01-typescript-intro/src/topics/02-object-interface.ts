
const skills:[number, string] = [2,'Counter']

const strider = 
{
    name: 'paco',
    hp:'100',
    skills: ['bash','Counter']
}


// Función Genérica
function identidad<T>(valor: T): T {
    return valor;
  }
  
  let numero: number = identidad(5);
  let texto: string = identidad("Hola");
















export{}