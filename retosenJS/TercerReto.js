//Tercer Reto
//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
//añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original 
//y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique 
//y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
//Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

function findNaughtyStep(original, modified) {
  // Si las cadenas son iguales, no hay ningún paso travieso
  if (original === modified) {
    return "";
  }

  // Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
  if (modified.length > original.length) {
    // Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
    for (let i = 0; i < original.length; i++) {
      // Si encontramos un carácter diferente, ese es el paso travieso
      if (original[i] !== modified[i]) {
        return modified[i];
      }
    }
    // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
    return modified[modified.length - 1];
  }

  // Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
  if (modified.length < original.length) {
    // Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
    for (let i = 0; i < modified.length; i++) {
      // Si encontramos un carácter diferente, el paso travieso es el de la cadena original
      if (original[i] !== modified[i]) {
        return original[i];
      }
    }
    // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
    return original[original.length - 1];
  }
}
