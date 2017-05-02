import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import config from '../firebaseConfig';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;
