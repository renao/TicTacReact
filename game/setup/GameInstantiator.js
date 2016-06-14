import { gameConfig } from './gameConfig';

emptyFieldDescriptor = null;

export function createGameField() {
  let gameField = new Array();

  for (let columnId = 0; columnId < gameConfig.columns; columnId++) {
    gameField[columnId] = new Array();
    for(let rowId = 0; rowId < gameConfig.rows; rowId++) {
      gameField[columnId][rowId] = emptyFieldDescriptor;
    }
  }

  return gameField;
}
