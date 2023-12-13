//Octavo Reto
//Los elfos están muy ocupados en el taller de Santa Claus 
//organizando regalos 🎁 para la víspera de Navidad 🎄.
//El formato de entrada es especial, ya que indica el número de regalos 
//y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.
//Los elfos tienen un sistema especial para organizar los regalos:
//	1. Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
//	2. Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
//	3. Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
//Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.
//Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

function organizeGifts(gifts) {
  let warehouse = "";
  let giftCount = {};

  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] >= "0" && gifts[i] <= "9") {
      let number = gifts[i];

      while (gifts[i + 1] >= "0" && gifts[i + 1] <= "9") {
        number += gifts[i + 1];
        i++;
      }

      number = parseInt(number);

      if (gifts[i + 1] >= "a" && gifts[i + 1] <= "z") {
        let letter = gifts[i + 1];
        i++;

        if (giftCount[letter]) {
          giftCount[letter] += number;
        } else {
          giftCount[letter] = number;
        }
      }
    }
  }

  for (let gift in giftCount) {
    let pallets = Math.floor(giftCount[gift] / 50);
    let boxes = Math.floor((giftCount[gift] % 50) / 10);
    let bags = giftCount[gift] % 10;

    for (let i = 0; i < pallets; i++) {
      warehouse += "[" + gift + "]";
    }

    for (let i = 0; i < boxes; i++) {
      warehouse += "{" + gift + "}";
    }

    if (bags > 0) {
      warehouse += "(";
      for (let i = 0; i < bags; i++) {
        warehouse += gift;
      }
      warehouse += ")";
    }
  }

  return warehouse;
}

const result1 = organizeGifts("76a11b");
console.log(result1);
const result2 = organizeGifts("20a");
console.log(result2);
const result3 = organizeGifts("70b120a4c");
console.log(result3);
const result4 = organizeGifts("9c");
console.log(result4);
const result5 = organizeGifts("19d51e");
console.log(result5);