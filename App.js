import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    appIsReady: false,

  }

  async componentDidMount() {

    await Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ appIsReady: true });


  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
        <Text style={[styles.flexRow, styles.text, styles.headingText]}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
        <Text>
        Loading...
        </Text>
        </View>
      );

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flex: 0.1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans-regular',
    // fontSize: 16
  },
});
