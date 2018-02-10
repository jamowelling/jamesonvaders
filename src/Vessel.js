import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';

class Vessel extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY({ x: 187, y: 400 });

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { moveX, moveY } = gesture;
        props.vesselLocation({ x: moveX - 5, y: moveY - 10 }); //eslint-disable-line
        position.setValue({ x: moveX - 30, y: moveY - 30});
      }
    });

    this.panResponder = panResponder;
    this.position = position;
  }
  componentDidMount() {
    this.props.vesselLocation({ x: 212, y: 420 });
    this.position.setValue({ x: 187, y: 400 });
  }
  render() {
    return (
      <Animated.View
        style={[this.position.getLayout(), styles.vesselContainer]}
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
