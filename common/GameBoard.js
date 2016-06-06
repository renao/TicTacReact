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
    // props.store.subscribe(() => this.render());

    this.fieldRows = [];

    for (let row = 0; row < props.rows; row += 1) {
      this.fieldRows[row] = <Row 
                              key={row}
                              row={row}
                              columns={props.columns}
                              onGameMoveHandle={this._handleGameMove.bind(this)}
                            />;
    }
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        {this.fieldRows}
      </View>
    );
  }

  _handleGameMove(rowId, columnId) {
    this.props.store.dispatch({ type: 'OCCUPY_FIELD', rowId: rowId, columnId: columnId });
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
