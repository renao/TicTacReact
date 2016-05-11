import React, {
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class GameBoard extends React.Component {
  render() {
    return (
      <View style={styles.gameBoard}>
        <Text>GameBoard here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});
