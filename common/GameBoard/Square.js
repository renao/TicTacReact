import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  update() {

  }

  determineStyle() {
    return (this.props.row == 0) ? styles.playerA : styles.playerB;
  }

  render() {
    return (
      <TouchableOpacity style={ this.determineStyle() } onPress={ () => this.props.onGameMoveHandle(this.props.column, this.props.row) }>
        <Text style={styles.label}>SquareLabel</Text>
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
    backgroundColor: 'purple',
  },
  playerB: {
    backgroundColor: 'orange',
  },
  label: {
    textAlign: 'center',
    fontSize: 50,
    color: 'green'
  }
});
