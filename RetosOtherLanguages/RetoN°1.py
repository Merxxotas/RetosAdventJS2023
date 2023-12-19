def find_first_repeated(gifts):
    # Crear una variable para guardar el resultado
    result = -1

    # Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
    min_index = len(gifts)

    # Crear un diccionario para guardar los números y sus índices
    seen = {}

    # Recorrer el arreglo de regalos
    for i in range(len(gifts)):
        # Obtener el número actual
        num = gifts[i]

        # Verificar si el número ya se ha visto
        if num in seen:
            # Obtener el índice de la primera ocurrencia
            first_index = seen[num]

            if i < min_index:
                # Actualizar el resultado y el mínimo
                result = num
                min_index = i
        else:
            # Guardar el número y su índice
            seen[num] = i

    # Devolver el resultado
    return result

# Ejemplo de uso
gifts = [1, 2, 3, 4, 2, 5, 6]
result = find_first_repeated(gifts)

print("El primer regalo repetido es:", result)
