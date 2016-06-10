import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Column from './GameBoard/Column'
import * as GameActions from './../game/GameActions'

export default class GameBoard extends Component {

  constructor(props) {
    super(props);
    let columns = [];
    let cols = props.store.getState().field.length;
    let rows = props.store.getState().field[0].length;

    for (let col = 0; col < cols; col++) {
      columns[col] = <Column
                              key={col}
                              column={col}
                              rows={rows}
                              onGameMoveHandle={this._handleGameMove.bind(this)}
                            />;
    }

    this.state = {
      field: columns
    }
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        {this.state.field}
      </View>
    );
  }

  _handleGameMove(x, y) {
    this.props.store.dispatch(GameActions.selectField(x, y));
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
