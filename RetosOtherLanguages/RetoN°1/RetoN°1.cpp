#include <iostream>
#include <unordered_map>
#include <vector>

int findFirstRepeated(const std::vector<int>& gifts) {
    // Crear una variable para guardar el resultado
    int result = -1;

    // Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
    int minIndex = gifts.size();

    // Crear un mapa para guardar los números y sus índices
    std::unordered_map<int, int> seen;

    // Recorrer el vector de regalos
    for (int i = 0; i < gifts.size(); ++i) {
        // Obtener el número actual
        int num = gifts[i];

        // Verificar si el número ya se ha visto
        if (seen.find(num) != seen.end()) {
            // Obtener el índice de la primera ocurrencia
            int firstIndex = seen[num];

            if (i < minIndex) {
                // Actualizar el resultado y el mínimo
                result = num;
                minIndex = i;
            }
        } else {
            // Guardar el número y su índice
            seen[num] = i;
        }
    }

    // Devolver el resultado
    return result;
}

int main() {
    // Ejemplo de uso
    std::vector<int> gifts = {1, 10, 2, 10, 20, 50, 7, 0, 0, 7};
    int result = findFirstRepeated(gifts);

    std::cout << "El primer regalo repetido es: " << result << std::endl;

    return 0;
}
