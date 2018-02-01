import React, { Component } from 'react';
import {
  View,
  Animated,
} from 'react-native';

class Projectile extends Component {
  render() {
    return (
      <Animated.View>
        <View style={styles.projectileStyle} />
      </Animated.View>
    );
  }
}

const styles = {
  projectileStyle: {
    width: 10,
    height: 20,
    backgroundColor: 'blue',
  },
};

export default Projectile;
