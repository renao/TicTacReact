  emptyFieldDescriptor = null;

export function createGameField(rows, columns) {
  let gameField = new Array();

  for (let x = 0; x < columns; x++) {
    gameField[x] = new Array();
    for(let y = 0; y < rows; y++) {
      gameField[x][y] = emptyFieldDescriptor;
    }
  }

  return gameField;
}
