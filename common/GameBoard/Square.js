import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.empty} onPress={ () => this.props.onGameMoveHandle(this.props.row, this.props.column)}>
        <Text style={styles.squareLabel}></Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  playerA: {
    backgroundColor: 'blue'
  },
  playerB: {
    backgroundColor: 'yellow'
  }
});
