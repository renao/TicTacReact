import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import * as GameActions from './../../game/GameActions'

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

/* TODO: Replace this by redux connect */
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  determineStyle() {
    return styles.empty;
    // return (this.props.row == 0) ? styles.playerA : styles.playerB;
  }

  label() {
    const { store } = this.context;
    let fieldLabel = store.getState().field[this.props.column][this.props.row];
    return (fieldLabel != null) ? fieldLabel : "";
  }

  render() {
    const { store } = this.context;
    return (
      <TouchableOpacity style={ this.determineStyle() } onPress={
        () => {
          store.dispatch(GameActions.selectField(this.props.column, this.props.row));
        }
      }>
        <Text style={styles.label}>{this.label()}</Text>
      </TouchableOpacity>
    );
  }
}

Square.contextTypes = {
  store: React.PropTypes.object
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
