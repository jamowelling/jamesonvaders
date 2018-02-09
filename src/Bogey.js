import React, { Component } from 'react';
import {
  View,
  Animated,
} from 'react-native';

class Bogey extends Component {
  render() {
    return (
      <View style={styles.bogeyStyle} />
    );
  }
}

const styles = {
  bogeyStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
};

export default Bogey;
