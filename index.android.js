import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import GameBoard from './common/GameBoard';

export default class TicTacReact extends Component {
  render() {
    return ( <GameBoard rows={3} columns={3} /> );
  }
}

AppRegistry.registerComponent('TicTacReact', () => TicTacReact);
