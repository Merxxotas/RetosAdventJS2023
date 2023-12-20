import java.util.ArrayList;
import java.util.List;

public class Main {
    public static List<String> manufacture(List<String> gifts, String materials) {
        // Crear una lista vacía para guardar los regalos que se pueden fabricar
        List<String> result = new ArrayList<>();
        // Recorrer la lista de regalos
        for (String gift : gifts) {
            // Crear una variable para indicar si el regalo se puede fabricar
            boolean canMake = true;
            // Recorrer las letras del regalo
            for (char letter : gift.toCharArray()) {
                // Verificar si la letra está en los materiales
                if (materials.indexOf(letter) == -1) {
                    // La letra no está, el regalo no se puede fabricar
                    canMake = false;
                    break;
                }
            }
            // Verificar si el regalo se puede fabricar
            if (canMake) {
                // El regalo se puede fabricar, lo agregamos al resultado
                result.add(gift);
            }
        }
        // Devolver el resultado
        return result;
    }

    public static void main(String[] args) {
        List<String> gifts = new ArrayList<>();
        gifts.add("tren");
        gifts.add("oso");
        gifts.add("pelota");
        String materials = "tronesa";
        System.out.println(manufacture(gifts, materials)); // ["tren", "oso"]

        gifts.clear();
        gifts.add("juego");
        gifts.add("puzzle");
        materials = "jlepuz";
        System.out.println(manufacture(gifts, materials)); // ["puzzle"]

        gifts.clear();
        gifts.add("libro");
        gifts.add("ps5");
        materials = "psli";
        System.out.println(manufacture(gifts, materials)); // []
    }
}
