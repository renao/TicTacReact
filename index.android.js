import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import devTools from 'remote-redux-devtools';

import { createStore, combineReducers } from 'redux';

import { createGameField } from './game/setup/GameInstantiator';
import GameBoard from './common/GameBoard';

function occupyField(state, action) {
  state[action.columnId][action.rowId] = "ASD";
  // TODO: Occupy field
  // TODO: validate state => reducer.
  return state;
}

const actionMap = {
  'SELECT_FIELD': occupyField,
}

function reducer(state=createGameField(), action) {
  const fn = actionMap[action.type];
  if(fn) return fn(state, action);
  return state;
}

export default class TicTacReact extends Component {
  render() {
    return (
      <GameBoard
        store={createStore(combineReducers({field: reducer}), devTools())}
      />
    )
  }
}

AppRegistry.registerComponent('TicTacReact', () => TicTacReact)
