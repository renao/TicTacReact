import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import GameBoard from '../../common/GameBoard';
import Column from '../../common/GameBoard/Column';

const mockStore = configureStore();

function mockField(columns, rows) {
  let field = new Array();

  for(let colId = 0; colId < columns; colId++) {
    field[colId] = new Array();
    for(let rowId = 0; rowId < rows; rowId++) {
      field[colId][rowId] = null;
    }
  }
  return field;
}

function testGameBoard(columns, rows) {
  const getState = { field: mockField(columns, rows) };
  const store = mockStore(getState);
  return shallow(<GameBoard store={store} />);
}


describe('<GameBoard />', () => {

  it('should render a <GameBoard />', () => {

    let gameBoard = testGameBoard(1, 1);
    expect(gameBoard.length).to.equal(1);
  });

  it('should create props.columns times columns inside a View', () => {
    let columns = 4;
    let gameBoard = testGameBoard(columns, 1);

    expect(gameBoard.find(View)).to.have.length(1);
    expect(gameBoard.find(Column)).to.have.length(columns);
    // TODO: Add Rows inside View component test, TestMock Row object.
  });
});
