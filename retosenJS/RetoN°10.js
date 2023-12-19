//Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
//Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. 
//Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
//Nos han pedido que escribamos una función adjustLights que, 
//dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), 
//devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
//adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)
//adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)
//adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
//adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)
//adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights) {
  let o1 = 0; // Contador para el patrón rojo-verde
  let o2 = 0; // Contador para el patrón verde-rojo
  for (let i = 0; i < lights.length; i++) {
    // Si el color no coincide con el patrón, incrementar el contador correspondiente
    if (lights[i] !== '🔴' && i % 2 === 0) o1++;
    if (lights[i] !== '🟢' && i % 2 === 1) o1++;
    if (lights[i] !== '🟢' && i % 2 === 0) o2++;
    if (lights[i] !== '🔴' && i % 2 === 1) o2++;
  }
  // Devolver el menor de los dos contadores
  return Math.min(o1, o2);
}