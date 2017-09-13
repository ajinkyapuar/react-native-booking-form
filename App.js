import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Font } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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
    validityBR: false,
    validityLN: false,
    validityLOC: false,

  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {

    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
    }).start();
  };

  keyboardWillHide = (event) => {

    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: 0,
    }).start();
  };

  async componentDidMount() {

    StatusBar.setHidden(true);

    await Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ appIsReady: true });


  }

  validateBR(text){
    // console.log(text, text.length);
    var regex = /([A-Z0-9]{6})/;
    var bool = regex.test(text);
    // console.log(bool);
    return !bool
  }

  validateLN(text){
    // console.log(text, text.length);
    var regex = /[a-zA-Z]{2,}/;
    var bool = regex.test(text);
    // console.log(bool);
    return !bool
  }

  validateLOC(text){
    // console.log(text, text.length);
    var regex = /[A-Z]{3,}/;
    var bool = regex.test(text);
    // console.log(bool);
    return !bool
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <KeyboardAvoidingView behavior="padding">
        <ScrollView>
        <View style={styles.container}>

        <View style={[styles.flexRow]}>
        <Text style={[styles.text, styles.headingText]}>
        Log-in now to view your upcoming and past flights
        </Text>
        </View>


        <View style={[styles.flexRow]}>
        <FontAwesome style={[styles.smileIcon]} name="smile-o" size={28} color="black" />
        <Text style={[styles.text , styles.titleText]}>
        Cut the queue. Check in now.
        </Text>
        <FontAwesome style={[styles.smileIcon]} name="smile-o" size={28} color="black" />
        </View>

        <View style={[styles.flexRow]}>
        <Text style={[styles.text, styles.subtitleText]}>
        "Check in online between 72 hours and 1 hour before departure. Head to the airport and get outta here. It's that simple!"
        </Text>
        </View>


        <View style={[styles.flexRow]}>
        <TextInput
        style={[styles.textInput, styles.text, styles.textInputBR, this.state.validityBR && styles.textInputError]}
        underlineColorAndroid="transparent"
        placeholder="Booking Reference"
        placeholderTextColor="black"
        returnKeyLabel={"next"}
        maxLength={6}
        value={this.state.textInputBR}
        onChangeText={(text) => this.setState({textInputBR: text})}
        onBlur={() => {
          this.setState({
            validityBR: this.validateBR(this.state.textInputBR)
          })
        }}
        />

        <TextInput
        style={[styles.textInput, styles.text, styles.textInputLN, this.state.validityLN && styles.textInputError]}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor="black"
        returnKeyLabel = {"next"}
        value={this.state.textInputLN}
        onChangeText={(text) => this.setState({textInputLN: text})}
        onBlur={() => {
          this.setState({
            validityLN: this.validateLN(this.state.textInputLN)
          })
        }}
        />
        </View>

        <View style={[styles.flexRow]}>
        <Ionicons style={[styles.locIcon]} name="md-pin" size={28} color="black" />
        <TextInput
        style={[styles.textInput, styles.text, styles.textInputLOC, this.state.validityLOC && styles.textInputError]}
        underlineColorAndroid="transparent"
        placeholder="Departing"
        placeholderTextColor="black"
        returnKeyLabel = {"next"}
        value={this.state.textInputLOC}
        onChangeText={(text) => this.setState({textInputLOC: text})}
        onBlur={() => {
          this.setState({
            validityLOC: this.validateLOC(this.state.textInputLOC)
          })
        }}
        />
        </View>

        <View style={[styles.flexRow]}>
        <TouchableOpacity style={[styles.submitBtn]}>
        <Text style={[styles.text, styles.buttonText ]}>Find booking</Text>
        </TouchableOpacity>
        </View>


        </View>
        </ScrollView>
        </KeyboardAvoidingView>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontFamily: 'open-sans-regular',
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
  textInputError: {
    borderColor: '#F44336',
  },
  textInputBR: {
    width: '50%',
    // marginLeft: 5,
    marginRight: 2.5,
    marginTop: 15,
    marginBottom: 5,
  },
  textInputLN: {
    width: '50%',
    marginLeft: 2.5,
    // marginRight: 5,
    marginTop: 15,
    marginBottom: 5,

  },
  textInputLOC: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    marginRight: 15,
    paddingHorizontal: 45


  },
  smileIcon: {
    padding: 5,
  },
  locIcon: {
    left: 60,
    marginRight: 25

  },
  submitBtn: {
    backgroundColor: 'black',
    borderRadius:5,
    borderWidth:2,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,


  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }

});
