import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';

import Vessel from './src/Vessel';
import Projectile from './src/Projectile';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      vesselLocation: {
        x: 0,
        y: 0,
      },
      projectiles: [],
    }
  }

  cleanUpProjectiles() {
    this.state.projectiles.forEach(value => {
      // console.log('projectile: ', value);
    })
  }

  componentDidMount() {
    setInterval(() => {
      const projectiles = [
        ...this.state.projectiles,
        {
          id: Math.random(),
          valueXY: new Animated.ValueXY(this.state.vesselLocation)
        }
      ];
      this.setState({ projectiles });
      this.cleanUpProjectiles();
    }, 200)
  }

  launchProjectile = (index) => {
    const valueXY = this.state.projectiles[index].valueXY;
    Animated.timing(valueXY.y, {
      toValue: -500,
      duration: 500,
      easing: Easing.linear(),
    }).start(() => {
      const projectiles = [...this.state.projectiles.slice(1)];
      this.setState({
        projectiles,
      });

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Vessel vesselLocation={(vesselLocation) => this.setState({ vesselLocation })}/>
        {
          this.state.projectiles.map((value, index) => {
            return (
              <Animated.View
                key={value.id}
                style={[value.valueXY.getLayout(), { position: 'absolute' }]}
              >
                <Projectile
                  launchProjectile={() => this.launchProjectile(index)}
                />
              </Animated.View>
            );
          })
        }
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
