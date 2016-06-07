  emptyFieldDescriptor = null;

export function createGameField(rows, columns) {
  let gameField = new Array();

  for (let columnId = 0; columnId < columns; columnId++) {
    gameField[columnId] = new Array();
    for(let rowId = 0; rowId < rows; rowId++) {
      gameField[columnId][rowId] = emptyFieldDescriptor;
    }
  }

  return gameField;
}
