//Segundo Reto
//En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
//Los regalos son cadenas de texto y los materiales son caracteres. 
//Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
//devuelva una lista de los regalos que se pueden fabricar.
//Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
  // Crear una lista vacía para guardar los regalos que se pueden fabricar
  let result = [];
  // Recorrer la lista de regalos
  for (let gift of gifts) {
    // Crear una variable para indicar si el regalo se puede fabricar
    let canMake = true;
    // Recorrer las letras del regalo
    for (let letter of gift) {
      // Verificar si la letra está en los materiales
      if (!materials.includes(letter)) {
        // La letra no está, el regalo no se puede fabricar
        canMake = false;
        break;
      }
    }
    // Verificar si el regalo se puede fabricar
    if (canMake) {
      // El regalo se puede fabricar, lo agregamos al resultado
      result.push(gift);
    }
  }
  // Devolver el resultado
  return result;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []