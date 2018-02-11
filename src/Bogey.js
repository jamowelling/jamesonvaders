import React, { Component } from 'react';
import {
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

class Bogey extends Component {
  render() {
    return (
      <Animated.View style={[styles.bogeyStyle, { backgroundColor: this.props.backgroundColor }]} />
    );
  }
}

const styles = {
  bogeyStyle: {
    width: 50,
    height: 50,
  },
};

Bogey.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Bogey;
