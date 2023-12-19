//Para una mejor contextualización, leer Readme.md de este archivo.

function drawClock(time) {
  const digitGrid = {
    '00': '1',
    '01': '14',
    '02': 'A',
    10: '1237',
    11: 'N',
    12: '56',
    20: '1237',
    21: 'N',
    22: '56',
    30: '17',
    31: '170',
    32: 'A',
    40: '134579',
    41: 'N',
    42: '2',
    50: '134579',
    51: 'N',
    52: '2',
    60: '147',
    61: '147',
    62: 'A'
  };

  // Mover la función createEmptyGrid dentro de la función drawClock
  const createEmptyGrid = function(rows, cols) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols).fill(' ');
    }
    return grid;
  };

  const clockGrid = createEmptyGrid(7, 17);
  clockGrid[2][8] = '*';
  clockGrid[4][8] = '*';

  const digits = [...time.replace(':', '')];
  let currentDigit = digits.shift();

  for (const index of [0, 4, 10, 14]) {
    for (let row = 0; row < 7; ++row) {
      for (let col = 0; col < 3; ++col) {
        const notFill = digitGrid[`${row}${col}`];
        if (notFill !== 'N' && (!notFill.includes(currentDigit) || notFill === 'A')) {
          clockGrid[row][col + index] = '*';
        }
      }
    }

    currentDigit = digits.shift();
  }

  return clockGrid;
}