import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';

import Bogey from './src/Bogey';
import Vessel from './src/Vessel';
import Projectile from './src/Projectile';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      vesselLocation: {
        x: 187,
        y: 400,
      },
      projectiles: [],
      bogey: {
        valueXY: new Animated.ValueXY({ x: 187, y: 1 }),
      },
    }
  }

  componentDidMount() {
    const idMaker = (function* () {
      let index = 0;
      while (index < index + 1)
        yield index++;
    })();

    setInterval(() => {
      const projectiles = [
        ...this.state.projectiles,
        {
          id: idMaker.next().value,
          valueXY: new Animated.ValueXY(this.state.vesselLocation)
        }
      ];
      this.setState({ projectiles });
    }, 1000)
  }

  launchProjectile = (index) => {
    const projectile = this.state.projectiles[index];
    projectile._value = { x: 0, y: 0 };
    projectile.valueXY.addListener(value => {
      projectile._value = value;
      if (projectile._value.y < 0) {
        // test case, triggers when projectile has gone off screen
      }
    });

    Animated.timing(projectile.valueXY.y, {
      toValue: -500,
      duration: 500,
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
        <Animated.View style={[this.state.bogey.valueXY.getLayout(), { position: 'absolute' }]}>
          <Bogey />
        </Animated.View>
        {
          this.state.projectiles.map((projectile, index) => {
            return (
              <Animated.View
                key={projectile.id}
                style={[projectile.valueXY.getLayout(), { position: 'absolute' }]}
              >
                <Projectile
                  launchProjectile={() => this.launchProjectile(index)}
                />
              </Animated.View>
            );
          })
        }
        <Vessel vesselLocation={(vesselLocation) => this.setState({ vesselLocation })}/>
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
