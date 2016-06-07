import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Square from './Square'

export default class Column extends Component {

  constructor(props) {
    super(props);
    this.squares = [];
    for (let row = 0; row < props.rows; row += 1) {
      this.squares[row] = <Square
                            key={props.column + ' ' + row}
                            column={props.column}
                            row={row}
                            onGameMoveHandle={props.onGameMoveHandle}
                          />;
    }
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
  },
});
