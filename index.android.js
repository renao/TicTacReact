/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import GameBoard from './scripts/GameBoard';

export default class TicTacReact extends Component {
  render() {
    return ( <GameBoard /> );
  }
}

AppRegistry.registerComponent('TicTacReact', () => TicTacReact);
