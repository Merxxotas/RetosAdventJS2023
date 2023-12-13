//Primer reto
//En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
//Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
//¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
//En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. 
//Si no hay números repetidos, devuelve -1.

function findFirstRepeated(gifts) {
  // Crear una variable para guardar el resultado
  let result = -1;
  // Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
  let minIndex = gifts.length;
  // Crear un objeto o un mapa para guardar los números y sus índices
  let seen = {};
  // Recorrer el arreglo de regalos
  for (let i = 0; i < gifts.length; i++) {
    // Obtener el número actual
    let num = gifts[i];
    // Verificar si el número ya se ha visto
    if (seen[num] !== undefined) {
      // Obtener el índice de la primera ocurrencia
      let firstIndex = seen[num];
      //Comparar el índice de la segunda ocurrencia con el mínimo
      if (i < minIndex) {
        // Actualizar el resultado y el mínimo
        result = num;
        minIndex = i;
      }
    } else {
      // Guardar el número y su índice
      seen[num] = i;
    }
  }
  // Devolver el resultado
  return result;
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
