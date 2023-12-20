import java.util.HashMap;
import java.util.Map;

public class Main {

    public static int findFirstRepeated(int[] gifts) {
        // Crear una variable para guardar el resultado
        int result = -1;

        // Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
        int minIndex = gifts.length;

        // Crear un mapa para guardar los números y sus índices
        Map<Integer, Integer> seen = new HashMap<>();

        // Recorrer el arreglo de regalos
        for (int i = 0; i < gifts.length; i++) {
            // Obtener el número actual
            int num = gifts[i];

            // Verificar si el número ya se ha visto
            if (seen.containsKey(num)) {
                // Obtener el índice de la primera ocurrencia
                int firstIndex = seen.get(num);

                if (i < minIndex) {
                    // Actualizar el resultado y el mínimo
                    result = num;
                    minIndex = i;
                }
            } else {
                // Guardar el número y su índice
                seen.put(num, i);
            }
        }

        // Devolver el resultado
        return result;
    }

    public static void main(String[] args) {
        // Ejemplo de uso
        int[] gifts = {1,10, 20, 10, 90, 90, 2, 3, 4, 2, 5, 6};
        int result = findFirstRepeated(gifts);

        System.out.println("El primer regalo repetido es: " + result);
    }
}
