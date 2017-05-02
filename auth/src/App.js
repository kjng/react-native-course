import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import config from '../firebaseConfig';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentDidMount() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const { spinnerContainer, buttonContainer } = styles;

    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={buttonContainer}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={spinnerContainer}>
            <Spinner size={'large'} />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    flexDirection: 'row'
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  }
};

export default App;
