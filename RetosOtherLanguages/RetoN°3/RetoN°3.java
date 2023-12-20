//Tercer Reto
//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
//añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original 
//y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique 
//y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
//Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

public class NaughtyStep {

  // Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
  public static String findNaughtyStep(String original, String modified) {
    // Si las cadenas son iguales, no hay ningún paso travieso
    if (original.equals(modified)) {
      return "";
    }

    // Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
    if (modified.length() > original.length()) {
      // Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
      for (int i = 0; i < original.length(); i++) {
        // Si encontramos un carácter diferente, ese es el paso travieso
        if (original.charAt(i) != modified.charAt(i)) {
          return Character.toString(modified.charAt(i));
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
      return Character.toString(modified.charAt(modified.length() - 1));
    }

    // Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
    if (modified.length() < original.length()) {
      // Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
      for (int i = 0; i < modified.length(); i++) {
        // Si encontramos un carácter diferente, el paso travieso es el de la cadena original
        if (original.charAt(i) != modified.charAt(i)) {
          return Character.toString(original.charAt(i));
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
      return Character.toString(original.charAt(original.length() - 1));
    }

    // Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
    return "";
  }

  // Estos son los tests que se deben incluir a forma de imprimir en consola
  public static void main(String[] args) {
    // Test: return type
    // Esperado: String
    System.out.println(findNaughtyStep("a", "b").getClass().getSimpleName());
    System.out.println();

    // Test: findNaughtyStep('abcd', 'abcde')
    // Esperado: 'e'
    System.out.println(findNaughtyStep("abcd", "abcde"));
    System.out.println();

    // Test: findNaughtyStep('abcde', 'abcd')
    // Esperado: 'e'
    System.out.println(findNaughtyStep("abcde", "abcd"));
    System.out.println();

    // Test: findNaughtyStep('xxxx', 'xxoxx')
    // Esperado: 'o'
    System.out.println(findNaughtyStep("xxxx", "xxoxx"));
    System.out.println();

    // Test: findNaughtyStep('stepfor', 'stepor')
    // Esperado: 'f'
    System.out.println(findNaughtyStep("stepfor", "stepor"));
    System.out.println();

    // Test: findNaughtyStep('iiiii', 'iiiii')
    // Esperado: 
    System.out.println(findNaughtyStep("iiiii", "iiiioi"));
    System.out.println();
  }
}
