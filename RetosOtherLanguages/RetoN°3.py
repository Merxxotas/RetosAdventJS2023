# Tercer Reto
# En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
# añadiendo o eliminando un paso no planificado.
# Tienes la secuencia original de pasos en la fabricación original 
# y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
# Tu tarea es escribir una función que identifique 
# y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
# Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

class NaughtyStep:

  # Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
  @staticmethod
  def findNaughtyStep(original, modified):
    # Si las cadenas son iguales, no hay ningún paso travieso
    if original == modified:
      return ""
    
    # Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
    if len(modified) > len(original):
      # Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
      for i in range(len(original)):
        # Si encontramos un carácter diferente, ese es el paso travieso
        if original[i] != modified[i]:
          return modified[i]
      # Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
      return modified[-1]
    
    # Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
    if len(modified) < len(original):
      # Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
      for i in range(len(modified)):
        # Si encontramos un carácter diferente, el paso travieso es el de la cadena original
        if original[i] != modified[i]:
          return original[i]
      # Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
      return original[-1]
    
    # Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
    return ""

# Estos son los tests que se deben incluir a forma de imprimir en consola
if __name__ == "__main__":
  # Test: return type
  # Esperado: str
  print(type(NaughtyStep.findNaughtyStep("a", "b")).__name__)
  print()

  # Test: findNaughtyStep('abcd', 'abcde')
  # Esperado: 'e'
  print(NaughtyStep.findNaughtyStep("abcd", "abcde"))
  print()

  # Test: findNaughtyStep('abcde', 'abcd')
  # Esperado: 'e'
  print(NaughtyStep.findNaughtyStep("abcde", "abcd"))
  print()

  # Test: findNaughtyStep('xxxx', 'xxoxx')
  # Esperado: 'o'
  print(NaughtyStep.findNaughtyStep("xxxx", "xxoxx"))
  print()

  # Test: findNaughtyStep('stepfor', 'stepor')
  # Esperado: 'f'
  print(NaughtyStep.findNaughtyStep("stepfor", "stepor"))
  print()

  # Test: findNaughtyStep('iiiii', 'iiiii')
  # Esperado: 
  print(NaughtyStep.findNaughtyStep("iiiii", "iiiioi"))
  print()
