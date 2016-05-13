import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GameBoard from '../../common/GameBoard';
import Row from '../../common/GameBoard/Row';

function testGameBoard(columns, rows) {
  return shallow(<GameBoard columns={columns} rows={rows} />);
}


describe('<GameBoard />', () => {

  it('should render a <GameBoard />', () => {
    let gameBoard = testGameBoard();
    expect(gameBoard.length).to.equal(1);
  });

  it('should create props.Rows x <GameBoardRow > inside a View', () => {
    let rows = 4;
    let gameBoard = testGameBoard(1, rows);

    expect(gameBoard.find(View)).to.have.length(1);
    expect(gameBoard.find(Row)).to.have.length(rows);
    // TODO: Add Rows inside View component test, TestMock Row object.
  });
});
