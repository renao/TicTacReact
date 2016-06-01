import { shallow } from 'enzyme';
import { expect } from 'chai';

import Player from '../../game/Player';

describe('Player', () => {

  const playerName = 'Jonny Knox';

  function createPlayer() {
    return new Player(playerName);
  }

  it('should create a player with indicator', () => {
    let player = createPlayer();

    expect(player.gameFieldIndicator).to.equal(playerName);
  });

});
