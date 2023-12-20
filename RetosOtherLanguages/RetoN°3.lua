-- Tercer Reto
-- En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, 
-- añadiendo o eliminando un paso no planificado.
-- Tienes la secuencia original de pasos en la fabricación original 
-- y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
-- Tu tarea es escribir una función que identifique 
-- y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
-- Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

-- Esta función encuentra y devuelve el primer paso travieso en la cadena de fabricación
function findNaughtyStep(original, modified)
  -- Si las cadenas son iguales, no hay ningún paso travieso
  if original == modified then
    return ""
  end

  -- Si la cadena modificada es más larga que la original, significa que se ha añadido un paso
  if #modified > #original then
    -- Recorremos la cadena original y comparamos cada carácter con el de la cadena modificada
    for i = 1, #original do
      -- Si encontramos un carácter diferente, ese es el paso travieso
      if original:sub(i, i) ~= modified:sub(i, i) then
        return modified:sub(i, i)
      end
    end
    -- Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena modificada
    return modified:sub(#modified, #modified)
  end

  -- Si la cadena modificada es más corta que la original, significa que se ha eliminado un paso
  if #modified < #original then
    -- Recorremos la cadena modificada y comparamos cada carácter con el de la cadena original
    for i = 1, #modified do
      -- Si encontramos un carácter diferente, el paso travieso es el de la cadena original
      if original:sub(i, i) ~= modified:sub(i, i) then
        return original:sub(i, i)
      end
    end
    -- Si no encontramos ningún carácter diferente, el paso travieso es el último de la cadena original
    return original:sub(#original, #original)
  end

  -- Si ninguna de las condiciones anteriores se cumple, devolvemos una cadena vacía
  return ""
end

-- Estos son los tests que se deben incluir a forma de imprimir en consola
-- Test: return type
-- Esperado: string
print(type(findNaughtyStep("a", "b")))
print()

-- Test: findNaughtyStep('abcd', 'abcde')
-- Esperado: 'e'
print(findNaughtyStep("abcd", "abcde"))
print()

-- Test: findNaughtyStep('abcde', 'abcd')
-- Esperado: 'e'
print(findNaughtyStep("abcde", "abcd"))
print()

-- Test: findNaughtyStep('xxxx', 'xxoxx')
-- Esperado: 'o'
print(findNaughtyStep("xxxx", "xxoxx"))
print()

-- Test: findNaughtyStep('stepfor', 'stepor')
-- Esperado: 'f'
print(findNaughtyStep("stepfor", "stepor"))
print()

-- Test: findNaughtyStep('iiiii', 'iiiii')
-- Esperado: 
print(findNaughtyStep("iiiii", "iiiioi"))
print()
