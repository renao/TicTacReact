import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Row from './GameBoard/Row'

export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.cols = 3;
    this.rows = 3;

    var squareFields = [];
    for (row = 1; row <= this.rows; row += 1) {
      squareFields[row] = <Row key={row} rowNumber={row} columns={this.cols} />;
    }

    this.state = {
      squareFields: squareFields
    };
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        {this.state.squareFields}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#111'
  },
});
