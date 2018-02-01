import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';

class Vessel extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log('hit');
        const { moveX, moveY } = gesture;
        position.setValue({ x: moveX - 30, y: moveY - 30});
      }
    });

    this.panResponder = panResponder;
    this.position = position;

  }
  render() {
    return (
      <Animated.View
        style={this.position.getLayout()}
        {...this.panResponder.panHandlers}
      >
        <View style={styles.vesselStyle} />
      </Animated.View>
    );
  }
}

const styles = {
  vesselStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black'
  },
};

export default Vessel;
