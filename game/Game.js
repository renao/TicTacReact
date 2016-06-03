import GameFieldOccupation from './GameFieldOccupation';

export default class Game {
  
  get currentFieldState() {
    return this.occupation;
  }

  constructor() {
    this.occupation = new GameFieldOccupation();
  }

  occupyField(column, row) {
    this.occupation[column][row] = 'ASD';
  }
}