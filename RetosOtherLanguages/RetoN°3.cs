//Tercer Reto
//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
//añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original 
//y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique 
//y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
//Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
using System;
public class NaughtyStep {

  // Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
  public static string FindNaughtyStep(string original, string modified) {
    // Si las cadenas son iguales, no hay ningún paso travieso
    if (original.Equals(modified)) {
      return "";
    }

    // Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
    if (modified.Length > original.Length) {
      // Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
      for (int i = 0; i < original.Length; i++) {
        // Si encontramos un carácter diferente, ese es el paso travieso
        if (original[i] != modified[i]) {
          return modified[i].ToString();
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
      return modified[modified.Length - 1].ToString();
    }

    // Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
    if (modified.Length < original.Length) {
      // Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
      for (int i = 0; i < modified.Length; i++) {
        // Si encontramos un carácter diferente, el paso travieso es el de la cadena original
        if (original[i] != modified[i]) {
          return original[i].ToString();
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
      return original[original.Length - 1].ToString();
    }

    // Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
    return "";
  }

  // Estos son los tests que se deben incluir a forma de imprimir en consola
  public static void Main(string[] args) {
    // Test: return type
    // Esperado: String
    Console.WriteLine(FindNaughtyStep("a", "b").GetType().Name);
    Console.WriteLine();

    // Test: findNaughtyStep('abcd', 'abcde')
    // Esperado: 'e'
    Console.WriteLine(FindNaughtyStep("abcd", "abcde"));
    Console.WriteLine();

    // Test: findNaughtyStep('abcde', 'abcd')
    // Esperado: 'e'
    Console.WriteLine(FindNaughtyStep("abcde", "abcd"));
    Console.WriteLine();

    // Test: findNaughtyStep('xxxx', 'xxoxx')
    // Esperado: 'o'
    Console.WriteLine(FindNaughtyStep("xxxx", "xxoxx"));
    Console.WriteLine();

    // Test: findNaughtyStep('stepfor', 'stepor')
    // Esperado: 'f'
    Console.WriteLine(FindNaughtyStep("stepfor", "stepor"));
    Console.WriteLine();

    // Test: findNaughtyStep('iiiii', 'iiiii')
    // Esperado: 
    Console.WriteLine(FindNaughtyStep("iiiii", "iiiioi"));
    Console.WriteLine();
  }
}
