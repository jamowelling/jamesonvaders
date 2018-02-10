import React, { Component } from 'react';
import {
  View,
  Animated,
} from 'react-native';

class Bogey extends Component {
  render() {
    return (
      <Animated.View style={styles.bogeyStyle} />
    );
  }
}

const styles = {
  bogeyStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
};

export default Bogey;
