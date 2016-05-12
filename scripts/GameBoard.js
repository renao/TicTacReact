import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Square from './Square'

export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.cols = 3;
    this.rows = 3;
    var squareFields = [];
    for (row = 1; row <= this.rows; row += 1) {
      squareFields[row] = [];
      for (col = 1; col <= this.cols; col += 1) {
        squareFields[row][col] = <Square key={row + ' ' + col} column={col} row={row} />;
      }
    }
    this.squareFields = squareFields;
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        {this.squareFields}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
});
