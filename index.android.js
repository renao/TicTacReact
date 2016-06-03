import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import GameBoard from './common/GameBoard';
import { createStore, combineReducers } from 'redux';
import Game from './game/Game';

function occupyField(state, action) {
  alert("Current state => " + state);
  state.occupyField(action.columnId, action.rowId);
  // alert("Occupy [ " + action.columnId + " | " + action.rowId + " ]");
  return state;
}

const actionMap = {
  'OCCUPY_FIELD': occupyField,
}

function reducer(state = new Game(), action) {
  const fn = actionMap[action.type];
  if(fn) return fn(state, action);
  return state;
}

const store = createStore(combineReducers({game: reducer}));

export default class TicTacReact extends Component {
  render() {
    return ( <GameBoard store={store} rows={3} columns={3} /> );
  }
}

AppRegistry.registerComponent('TicTacReact', () => TicTacReact);
