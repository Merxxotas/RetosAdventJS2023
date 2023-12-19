# Primer reto
# En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
# Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
# ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
# En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. 
# Si no hay números repetidos, devuelve -1.

findFirstRepeated <- function(gifts) {
  # Crear una variable para guardar el resultado
  result <- -1
  # Crear una variable para guardar el índice más pequeño de la segunda ocurrencia
  minIndex <- length(gifts)
  # Crear un vector para guardar los índices de los números vistos
  seen <- numeric()
  
  # Recorrer el vector de regalos
  for (i in seq_along(gifts)) {
    # Obtener el número actual
    num <- gifts[i]
    # Verificar si el número ya se ha visto
    if (num %in% seen) {
      # Obtener el índice de la primera ocurrencia
      firstIndex <- which(seen == num)[1]
      # Comparar el índice de la segunda ocurrencia con el mínimo
      if (i < minIndex) {
        # Actualizar el resultado y el mínimo
        result <- num
        minIndex <- i
      }
    } else {
      # Guardar el índice del número
      seen <- c(seen, i)
    }
  }
  # Devolver el resultado
  return(result)
}

# Ejemplos de uso
giftIds <- c(2, 1, 3, 5, 3, 2)
firstRepeatedId <- findFirstRepeated(giftIds)
cat("Resultado 1:", firstRepeatedId, "\n")  # 3

giftIds2 <- c(1, 2, 3, 4)
firstRepeatedId2 <- findFirstRepeated(giftIds2)
cat("Resultado 2:", firstRepeatedId2, "\n")  # -1

giftIds3 <- c(5, 1, 5, 1)
firstRepeatedId3 <- findFirstRepeated(giftIds3)
cat("Resultado 3:", firstRepeatedId3, "\n")  # 5
