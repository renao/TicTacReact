import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import * as GameActions from './../../game/GameActions'

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  update() {

  }

  determineStyle() {
    return (this.props.row == 0) ? styles.playerA : styles.playerB;
  }

  label() {
    return (this.props.label) ? this.props.label : 'default';
  }

  render() {
    return (
      <TouchableOpacity style={ this.determineStyle() } onPress={ () => GameActions.selectField(this.props.column, this.props.row) }>
        <Text style={styles.label}>{this.label()}</Text>
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
