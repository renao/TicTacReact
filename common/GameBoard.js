import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import Column from './GameBoard/Column';

export default class GameBoard extends Component {

  constructor(props) {
    super(props);

    let cols = props.store.getState().field.length;
    let rows = props.store.getState().field[0].length;

    this.columns = [];
    this.createSquares(cols, rows);
  }

  createSquares(columns, rows) {
    for (let col = 0; col < columns; col++) {
      this.columns[col] = <Column
                            key={col}
                            column={col}
                            rows={rows}
                          />;
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <View style={styles.gameBoard}>
          { this.columns }
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
