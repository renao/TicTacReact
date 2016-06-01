export default class GameFieldOccupation {

  emptyFieldDescriptor = undefined;

  get field() {
    return this.fieldOccupation;
  }

  constructor(columns=3, rows=3) {
    this.initGameField(rows, columns);
  }

  initGameField(rows, columns) {
    this.fieldOccupation = new Array();
    for (let x = 0; x < columns; x++) {
      this.fieldOccupation[x] = new Array();
      for(let y = 0; y < rows; y++) {
        this.fieldOccupation[x][y] = GameFieldOccupation.emptyFieldDescriptor;
      }
    }
  }
}
