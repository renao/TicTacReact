import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Square from './Square'

export default class Row extends Component {

  constructor(props) {
    super(props);
    this.squares = [];
    for (let col = 1; col <= props.columns; col += 1) {
      this.squares[col - 1] = <Square key={col + ' ' + props.row} column={col} row={props.row} onGameMoveHandle={props.onGameMoveHandle} />;
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
