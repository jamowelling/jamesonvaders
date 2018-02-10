import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class Projectile extends Component {
  componentDidMount() {
    this.props.launchProjectile();
  }

  render() {
    return (
      <View style={styles.projectileStyle} />
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

Projectile.propTypes = {
  launchProjectile: PropTypes.func,
};

export default Projectile;
