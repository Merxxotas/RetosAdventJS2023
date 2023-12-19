<?php

function findFirstRepeated($gifts) {
    // Crear una variable para guardar el resultado
    $result = -1;

    // Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
    $minIndex = count($gifts);

    // Crear un array para guardar los números y sus índices
    $seen = array();

    // Recorrer el array de regalos
    for ($i = 0; $i < count($gifts); $i++) {
        // Obtener el número actual
        $num = $gifts[$i];

        // Verificar si el número ya se ha visto
        if (isset($seen[$num])) {
            // Obtener el índice de la primera ocurrencia
            $firstIndex = $seen[$num];

            if ($i < $minIndex) {
                // Actualizar el resultado y el mínimo
                $result = $num;
                $minIndex = $i;
            }
        } else {
            // Guardar el número y su índice
            $seen[$num] = $i;
        }
    }

    // Devolver el resultado
    return $result;
}

// Ejemplo de uso
$gifts = array(1, 2, 3, 4, 2, 5, 6);
$result = findFirstRepeated($gifts);

echo "El primer regalo repetido es: " . $result . PHP_EOL;

?>
