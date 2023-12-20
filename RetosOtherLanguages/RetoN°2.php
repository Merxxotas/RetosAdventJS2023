//Segundo Reto
//En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
//Los regalos son cadenas de texto y los materiales son caracteres. 
//Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
//devuelva una lista de los regalos que se pueden fabricar.
//Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
function manufacture($gifts, $materials) {
  // Crear una lista vacía para guardar los regalos que se pueden fabricar
  $result = [];
  // Recorrer la lista de regalos
  foreach ($gifts as $gift) {
    // Crear una variable para indicar si el regalo se puede fabricar
    $canMake = true;
    // Recorrer las letras del regalo
    for ($i = 0; $i < strlen($gift); $i++) {
      $letter = $gift[$i];
      // Verificar si la letra está en los materiales
      if (strpos($materials, $letter) === false) {
        // La letra no está, el regalo no se puede fabricar
        $canMake = false;
        break;
      }
    }
    // Verificar si el regalo se puede fabricar
    if ($canMake) {
      // El regalo se puede fabricar, lo agregamos al resultado
      $result[] = $gift;
    }
  }
  // Devolver el resultado
  return $result;
}
$gifts = ['tren', 'oso', 'pelota'];
$materials = 'tronesa';
manufacture($gifts, $materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
$gifts = ['juego', 'puzzle'];
$materials = 'jlepuz';
manufacture($gifts, $materials); // ["puzzle"]
$gifts = ['libro', 'ps5'];
$materials = 'psli';
manufacture($gifts, $materials); // []
