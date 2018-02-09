import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import Bogey from './src/Bogey';
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

  componentDidMount() {

    function* idMaker() {
      let index = 0;
      while (index < index + 1)
        yield index++;
    }

    const gen = idMaker();

    setInterval(() => {
      const projectiles = [
        ...this.state.projectiles,
        {
          id: gen.next().value,
          genesis: this.state.vesselLocation,
        }
      ];
      this.setState({ projectiles });
    }, 300)
  }

  finishedAnimation = (finished, id) => {
    const projectiles = this.state.projectiles.filter(projectile => projectile.id !== id);
    this.setState({ projectiles });
  }

  render() {
    return (
      <View style={styles.container}>
        <Bogey style={{ position: 'absolute' }}/>
        <Vessel vesselLocation={(vesselLocation) => this.setState({ vesselLocation })}/>
        {
          this.state.projectiles.map(value => {
            return (
              <Projectile
                key={value.id}
                data={value}
                finishedAnimation={this.finishedAnimation}
              />
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
