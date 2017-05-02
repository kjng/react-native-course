import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import config from '../firebaseConfig';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
