import React, {
  StyleSheet,
  View,
} from 'react-native';

import Square from '../Square'

export default class Row extends React.Component {

  constructor(props) {
    super(props);
    var squares = [];
    for (col = 1; col <= props.columns; col += 1) {
      squares[col] = <Square key={props.row + ' ' + col} column={col} row={row} />;
    }
    this.squares = squares;
  }

  render() {
    return (
      <View style={styles.gameBoardRow}>
        {this.squares}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoardRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 1
  },
});
