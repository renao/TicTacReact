import { shallow } from 'enzyme';
import { expect } from 'chai';

import GameFieldOccupation from '../../game/GameFieldOccupation';

describe('GameFieldOccupation', () => {

  const rows = 4;
  const columns = 5;

  function createOccupation() {
    return new GameFieldOccupation(columns, rows);
  }

  it('should have a valid test setup', () => {
    let occupation = createOccupation();

    expect(rows).to.be.above(0);
    expect(columns).to.be.above(0);

    expect(occupation).to.not.equal(undefined);
    expect(occupation).to.not.equal(null);
  });

  it('should init a occupation x columns in field', () => {
    let occupation = createOccupation();

    expect(occupation.field).to.have.length(columns);
  });

  it('should init a occupation y rows per column in field', () => {
    let occupation = createOccupation();

    for (let i = 0; i < occupation.field.length; i++) {
      expect(occupation.field[i]).to.have.length(rows);
    }
  });

  it('should start with empty field indicated by empty description', () => {
    let occupation = createOccupation();

    for (let x = 0; x < occupation.field.length; x++) {
      for (let y = 0; y < occupation.field[x].length; y++) {
        expect(occupation.field[x][y]).to.equal(GameFieldOccupation.emptyFieldDescriptor);
      }
    }

  });

});
