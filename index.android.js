import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import GameBoard from './common/GameBoard';

import { createStore } from 'redux';

import { Game } from './game/Game';


let currentGame = undefined;

function noopReducer(state=[], action) {
  if (action == 'OCCUPY_FIELD') {
    currentGame.occupyField(action.columnId, action.rowId);
  }
  return state;
}

function createGame() {
  store = createStore(noopReducer, new Game());

}


let store = createStore(noopReducer);

export default class TicTacReact extends Component {
  render() {
    return ( <GameBoard store={store} rows={3} columns={3} /> );
  }
}

AppRegistry.registerComponent('TicTacReact', () => TicTacReact);
