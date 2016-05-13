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
    let field = [];
    for (row = 1; row <= props.rows; row += 1) {
      field[row - 1] = <Row key={row} row={row} columns={props.columns} onGameMoveHandle={this._handleGameMove.bind(this)} />;
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

  _handleGameMove(rowId, columnId) {
    alert("Occupy [ " + columnId + " | " + rowId + " ]");
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
