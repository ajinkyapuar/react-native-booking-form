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

        <Text style={[styles.flexRow, styles.text, styles.headingText]}>
        Log-in now to view your upcoming and past flights
        </Text>

        <Text style={[styles.flexRow, styles.text , styles.titleText]}>
        Cut the queue. Check in now.
        </Text>

        <Text style={[styles.flexRow, styles.text, styles.subtitleText]}>
        "Check in online between 72 hours and 1 hour before departure. Head to the airport and get outta here. It's that simple."
        </Text>

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
    padding: 10,
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
  headingText: {

  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20

  },
  subtitleText: {

  },

});
