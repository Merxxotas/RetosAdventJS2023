//Cuarto Reto
//En el taller de Santa 🎅, algunos mensajes navideños 
//han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
//Santa necesita que estos mensajes estén correctamente formateados. 
//Tu tarea es escribir una función que tome una cadena de texto 
//y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
//Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
//Notas:
//	1. Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
//	2. En el mensaje final no deben quedar paréntesis.
//	3. El nivel máximo de anidamiento es 2.

function decode(message) {
    let stack = [];
    for (let char of message) {
        if (char === ')') {
            let reversed = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                reversed += stack.pop();
            }
            // Remove the '(' from stack
            stack.pop();
            // Push the reversed string back into stack
            for (let c of reversed) {
                stack.push(c);
            }
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus