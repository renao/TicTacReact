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

    var field = [];
    for (row = 1; row <= props.rows; row += 1) {
      field[row - 1] = <Row key={row} row={row} columns={props.columns} />;
    }

    this.state = {
      field: field
    };
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        {this.state.field}
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
