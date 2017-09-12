import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    appIsReady: false,
    textInputBR:'',
    textInputLN:'',
    textInputLOC:'',

  }

  async componentDidMount() {

    StatusBar.setHidden(true);

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

        <View style={[styles.flexRow]}>
        <TextInput
        style={[styles.textInput, styles.text, styles.textInputBR]}
        underlineColorAndroid="transparent"
        placeholder="Booking Reference"
        placeholderTextColor="black"
        value={this.state.textInputBR}
        onChangeText={(text) => this.setState({textInputBR: text})}
        />
        <TextInput
        style={[styles.textInput, styles.text, styles.textInputLN]}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor="black"
        value={this.state.textInputLN}
        onChangeText={(text) => this.setState({textInputLN: text})}
        />
        </View>

        <TextInput
        style={[styles.textInput, styles.text, styles.textInputLOC]}
        underlineColorAndroid="transparent"
        placeholder="Departing"
        placeholderTextColor="black"
        value={this.state.textInputLOC}
        onChangeText={(text) => this.setState({textInputLOC: text})}
        />

        <TouchableOpacity style={[styles.flexRow, styles.submitBtn]}>
        <Text style={[styles.text, styles.buttonText ]}>Find booking</Text>
        </TouchableOpacity>

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
  textInput: {
    height: 50,
    borderColor: '#eee',
    borderRadius:5,
    borderWidth:2,
    paddingHorizontal: 20,
  },
  textInputBR: {
    width: '50%',
    marginLeft: 5,
    marginRight: 2.5,
    marginTop: 15,
    marginBottom: 20,
  },
  textInputLN: {
    width: '50%',
    marginLeft: 2.5,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 20,

  },
  textInputLOC: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,


  },
  submitBtn: {
    backgroundColor: 'black',
    borderRadius:5,
    borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',


  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }

});
