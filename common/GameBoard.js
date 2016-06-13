import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
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
                            />;
    }

    this.state = {
      field: columns
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <View style={styles.gameBoard}>
          {this.state.field}
        </View>
      </Provider>
    );
  }
}

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
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
