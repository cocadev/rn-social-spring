import React, { Component } from 'react';
import { YellowBox, View, StyleSheet } from 'react-native';
import { Routers } from './src/routers';

YellowBox.ignoreWarnings(['Warning: componentWillMount', 'Warning: componentWillReceiveProps']);

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Routers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
