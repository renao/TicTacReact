import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Row from '../../../common/GameBoard/Row';
import Square from '../../../common/GameBoard/Square';

function renderRow(key, columns, row) {
  return shallow(<Row key={key} columns={columns} row={row} />);
}


describe('<Row />', () => {

  it('should render a <Row />', () => {
    expect(renderRow('some_key', 1, 1).length).to.equal(1);
  });

  it('should render as many <Squares /> as props.columns is passed', () => {
    let squareCount = 12;
    let testRow = renderRow('some_key', squareCount, 1);
    expect(testRow.find(Square).length).to.equal(squareCount);
  });

  it('should pass coordinates to <Square />', () => {
    // TODO: TestMock square, otherwise this test relays on the Square implementation.
    let squareCount = 12;
    let rowId = 5;
    let testRow = renderRow('_', squareCount, rowId);
    let squares = testRow.renderer.getRenderOutput().props.children;

    expect(React.Children.count(squares)).to.equal(squareCount);

    React.Children.forEach(squares, (square, index) => {
      let colId = index;
      expect(square.key).to.equal(colId + ' ' + rowId);
      expect(square.props.row).to.equal(rowId);
      expect(square.props.column).to.equal(colId);
    });
  });
});
