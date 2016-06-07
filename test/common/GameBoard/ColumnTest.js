import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Column from '../../../common/GameBoard/Column';
import Square from '../../../common/GameBoard/Square';

function renderColumn(key, rows, column) {
  return shallow(<Column key={key} column={column} rows={rows} />);
}


describe('<Column />', () => {

  it('should render a <Column />', () => {
    expect(renderColumn('some_key', 1, 1).length).to.equal(1);
  });

  it('should render as many <Squares /> as props.rows is passed', () => {
    let squareCount = 12;
    let testColumn = renderColumn('some_key', squareCount, 1);
    expect(testColumn.find(Square).length).to.equal(squareCount);
  });

  it('should pass coordinates to <Square />', () => {
    // TODO: TestMock square, otherwise this test relays on the Square implementation.
    let squareCount = 12;
    let colId = 5;
    let testColumn = renderColumn('_', squareCount, colId);
    let squares = testColumn.renderer.getRenderOutput().props.children;

    expect(React.Children.count(squares)).to.equal(squareCount);

    React.Children.forEach(squares, (square, index) => {
      let rowId = index;
      expect(square.key).to.equal(colId + ' ' + rowId);
      expect(square.props.row).to.equal(rowId);
      expect(square.props.column).to.equal(colId);
    });
  });
});
