import React, { Component } from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

class Projectile extends Component {
  constructor(props) {
    super(props);

    this.animatedObject = null;
    const position = new Animated.ValueXY(this.props.data.genesis);

    this.state = {
      position,
    }
  }

  componentWillMount() {
    this._value = { x: 0, y: 0 };
    this.state.position.addListener((value) => this._value = value);
  }

  componentDidMount() {
    this.launchProjectile();
  }

  componentWillUnmount() {
    this.state.position.removeAllListeners();
  }

  launchProjectile = () => {
    Animated.timing(this.state.position.y, {
      toValue: -50,
      duration: 500,
      // easing: Easing.linear(),
    }).start(({ finished }) => {
      this.props.finishedAnimation(finished, this.props.data.id);
    });
  }

  render() {
    return (
      <Animated.View
        ref={animatedObject => this.animatedObject = animatedObject}
        style={[this.state.position.getLayout(), { position: 'absolute' }]}
      >
        <View
          style={styles.projectileStyle}
        />
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

Projectile.propTypes = {
  data: PropTypes.object,
  finishedAnimation: PropTypes.func,
}

export default Projectile;
