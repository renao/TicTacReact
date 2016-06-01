export default class Player {

  get gameFieldIndicator() {
    return this.id;
  }

  constructor(id) {
    this.id = id;
  }
}
