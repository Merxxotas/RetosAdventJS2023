//Tercer Reto
//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
//añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original 
//y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique 
//y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
//Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

#include <string>
#include <iostream>
using namespace std;

// Esta clase contiene la función que encuentra el paso travieso
class NaughtyStepFinder {

  // Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
  public:
  static string findNaughtyStep(string original, string modified) {
    // Si las cadenas son iguales, no hay ningún paso travieso
    if (original == modified) {
      return "";
    }

    // Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
    if (modified.length() > original.length()) {
      // Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
      for (int i = 0; i < original.length(); i++) {
        // Si encontramos un carácter diferente, ese es el paso travieso
        if (original[i] != modified[i]) {
          return string(1, modified[i]);
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
      return string(1, modified[modified.length() - 1]);
    }

    // Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
    if (modified.length() < original.length()) {
      // Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
      for (int i = 0; i < modified.length(); i++) {
        // Si encontramos un carácter diferente, el paso travieso es el de la cadena original
        if (original[i] != modified[i]) {
          return string(1, original[i]);
        }
      }
      // Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
      return string(1, original[original.length() - 1]);
    }

    // Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
    return "";
  }
};

// Esta es la función main, que es el punto de entrada del programa
int main () {
  // Estos son los tests que se deben incluir a forma de imprimir en consola
  // Test: return type
  // Esperado: string
  cout << typeid(NaughtyStepFinder::findNaughtyStep("a", "b")).name() << endl;
  cout << endl;

  // Test: findNaughtyStep('abcd', 'abcde')
  // Esperado: 'e'
  cout << NaughtyStepFinder::findNaughtyStep("abcd", "abcde") << endl;
  cout << endl;

  // Test: findNaughtyStep('abcde', 'abcd')
  // Esperado: 'e'
  cout << NaughtyStepFinder::findNaughtyStep("abcde", "abcd") << endl;
  cout << endl;

  // Test: findNaughtyStep('xxxx', 'xxoxx')
  // Esperado: 'o'
  cout << NaughtyStepFinder::findNaughtyStep("xxxx", "xxoxx") << endl;
  cout << endl;

  // Test: findNaughtyStep('stepfor', 'stepor')
  // Esperado: 'f'
  cout << NaughtyStepFinder::findNaughtyStep("stepfor", "stepor") << endl;
  cout << endl;

  // Test: findNaughtyStep('iiiii', 'iiiii')
  // Esperado: 
  cout << NaughtyStepFinder::findNaughtyStep("iiiii", "iiiioi") << endl;
  cout << endl;

  // Devolvemos 0 para indicar que el programa ha terminado con éxito
  return 0;
}
