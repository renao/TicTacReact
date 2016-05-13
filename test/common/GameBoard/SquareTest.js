import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Square from '../../../common/GameBoard/Square';

function renderSquare(column, row) {
  return shallow(<Square key='some_key' columns={column} row={row} />);
}


describe('<Square />', () => {
  it('should render a <Square /> with columnId and rowId', () => {
    let columnId = 13;
    let rowId = 19;
    let squares = renderSquare(columnId, rowId).renderer.getRenderOutput().props.children;

    React.Children.forEach(squares, (square) => {
      expect(square.props.row).to.equal(rowId);
      expect(square.props.column).to.equal(columnId);
    });
  });

  it('contains a <Text> element', () => {
    let columnId = 13;
    let rowId = 19;
    let square = renderSquare(columnId, rowId);

    expect(square.find(Text).length).to.equal(1);
    expect(square.find(Text)[0]).to.equal(<Text>{rowId + ' ' + columnId}</Text>);
  });
});
