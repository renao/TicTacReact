
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Square extends Component {

  constructor(props) {
    super(props);
    this.row = props.row;
    this.column = props.column;
    this.field = props.field;
  }

  render() {
    return (
      <View style={styles.square}>
        <Text>{this.column} {this.row}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
});
