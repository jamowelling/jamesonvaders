import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Vessel from './src/Vessel';
import Projectile from './src/Projectile';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Vessel />
        <Projectile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
