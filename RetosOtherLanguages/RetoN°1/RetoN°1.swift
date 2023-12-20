func findFirstRepeated(gifts: [Int]) -> Int {
    // Crear una variable para guardar el resultado
    var result = -1
    // Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
    var minIndex = gifts.count
    // Crear un diccionario para guardar los números y sus índices
    var seen = [Int: Int]()
    
    // Recorrer el arreglo de regalos
    for i in 0..<gifts.count {
        // Obtener el número actual
        let num = gifts[i]
        // Verificar si el número ya se ha visto
        if let firstIndex = seen[num] {
            // Comparar el índice de la segunda ocurrencia con el mínimo
            if i < minIndex {
                // Actualizar el resultado y el mínimo
                result = num
                minIndex = i
            }
        } else {
            // Guardar el número y su índice
            seen[num] = i
        }
    }
    
    // Devolver el resultado
    return result
}

let giftIds = [2, 1, 3, 5, 3, 2]
let firstRepeatedId = findFirstRepeated(gifts: giftIds)
print(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

let giftIds2 = [1, 2, 3, 4]
let firstRepeatedId2 = findFirstRepeated(gifts: giftIds2)
print(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

let giftIds3 = [5, 1, 5, 1]
let firstRepeatedId3 = findFirstRepeated(gifts: giftIds3)
print(firstRepeatedId3) // 5
