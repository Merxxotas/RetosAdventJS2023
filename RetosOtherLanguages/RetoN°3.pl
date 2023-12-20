# Tercer Reto
# En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
# añadiendo o eliminando un paso no planificado.
# Tienes la secuencia original de pasos en la fabricación original 
# y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
# Tu tarea es escribir una función que identifique 
# y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
# Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

package NaughtyStep;

# Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
sub findNaughtyStep {
  my ($original, $modified) = @_;
  # Si las cadenas son iguales, no hay ningún paso travieso
  if ($original eq $modified) {
    return "";
  }

  # Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
  if (length($modified) > length($original)) {
    # Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
    for (my $i = 0; $i < length($original); $i++) {
      # Si encontramos un carácter diferente, ese es el paso travieso
      if (substr($original, $i, 1) ne substr($modified, $i, 1)) {
        return substr($modified, $i, 1);
      }
    }
    # Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
    return substr($modified, length($modified) - 1, 1);
  }

  # Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
  if (length($modified) < length($original)) {
    # Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
    for (my $i = 0; $i < length($modified); $i++) {
      # Si encontramos un carácter diferente, el paso travieso es el de la cadena original
      if (substr($original, $i, 1) ne substr($modified, $i, 1)) {
        return substr($original, $i, 1);
      }
    }
    # Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
    return substr($original, length($original) - 1, 1);
  }

  # Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
  return "";
}

# Estos son los tests que se deben incluir a forma de imprimir en consola
# Test: return type
# Esperado: String
print ref(findNaughtyStep("a", "b")) . "\n";
print "\n";

# Test: findNaughtyStep('abcd', 'abcde')
# Esperado: 'e'
print findNaughtyStep("abcd", "abcde") . "\n";
print "\n";

# Test: findNaughtyStep('abcde', 'abcd')
# Esperado: 'e'
print findNaughtyStep("abcde", "abcd") . "\n";
print "\n";

# Test: findNaughtyStep('xxxx', 'xxoxx')
# Esperado: 'o'
print findNaughtyStep("xxxx", "xxoxx") . "\n";
print "\n";

# Test: findNaughtyStep('stepfor', 'stepor')
# Esperado: 'f'
print findNaughtyStep("stepfor", "stepor") . "\n";
print "\n";

# Test: findNaughtyStep('iiiii', 'iiiii')
# Esperado: 
print findNaughtyStep("iiiii", "iiiioi") . "\n";
print "\n";
