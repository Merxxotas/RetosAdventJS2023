//Segundo Reto
//En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
//Los regalos son cadenas de texto y los materiales son caracteres. 
//Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
//devuelva una lista de los regalos que se pueden fabricar.
//Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var gifts = new string[] {"tren", "oso", "pelota"};
        var materials = "tronesa";

        Console.WriteLine(string.Join(", ", Manufacture(gifts, materials))); // ["tren", "oso"]
        // 'tren' SÍ porque sus letras están en 'tronesa'
        // 'oso' SÍ porque sus letras están en 'tronesa'
        // 'pelota' NO porque sus letras NO están en 'tronesa'

        gifts = new string[] {"juego", "puzzle"};
        materials = "jlepuz";

        Console.WriteLine(string.Join(", ", Manufacture(gifts, materials))); // ["puzzle"]

        gifts = new string[] {"libro", "ps5"};
        materials = "psli";

        Console.WriteLine(string.Join(", ", Manufacture(gifts, materials))); // []
    }

    static List<string> Manufacture(string[] gifts, string materials)
    {
        // Crear una lista vacía para guardar los regalos que se pueden fabricar
        var result = new List<string>();
        // Recorrer la lista de regalos
        foreach (var gift in gifts)
        {
            // Crear una variable para indicar si el regalo se puede fabricar
            var canMake = true;
            // Recorrer las letras del regalo
            foreach (var letter in gift)
            {
                // Verificar si la letra está en los materiales
                if (!materials.Contains(letter))
                {
                    // La letra no está, el regalo no se puede fabricar
                    canMake = false;
                    break;
                }
            }
            // Verificar si el regalo se puede fabricar
            if (canMake)
            {
                // El regalo se puede fabricar, lo agregamos al resultado
                result.Add(gift);
            }
        }
        // Devolver el resultado
        return result;
    }
}
