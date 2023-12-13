//Quinto Reto
// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:
// 	1. . es igual a Carretera ( . = Carretera)
// 	2. S es igual a Trineo de Santa ( S = Trineo de Santa)
// 	3. * es igual a Barrera abierta ( * = Barrera abierta)
// 	4. | es igual a Barrera cerrada ( | = Barrera cerrada)
// Ejemplo de carretera: S...|....|.....
// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
// La plantilla para resolver el código es el siguiente:
function cyberReindeer(road, time) {
  // TODO
  return [];
}
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]*/

function cyberReindeer(road, time) {
  const ROAD_CHANGE_TIME = 5;
  const cleanRoad = `.${road.slice(1)}`;
  const roads = [cleanRoad, cleanRoad.replaceAll('|', '*')];
  const result = new Array(time);

  let position = -1;

  for (let i = 0; i < time; i++) {
    const currentRoad = i >= ROAD_CHANGE_TIME ? roads[1] : roads[0];
    const canStepUp = currentRoad[position + 1] !== '|';

    if (canStepUp) {
      position++;
    }

    const left = currentRoad.slice(0, position);
    const right = currentRoad.slice(position + 1);
    const current = `${left}S${right}`;

    result[i] = current;
  }

  return result;
}