import React, { Component } from 'react';
import { /*Alert,*/ Text } from 'react-native'; // See lines 26 and 33 for Alert RN replacement
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((signInError) => {
        if (signInError.code === 'auth/wrong-password') {
          this.setState({ error: signInError.message, loading: false });
          // Alert.alert('Login', signInError.message);
          return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((createUserError) => {
            this.setState({ error: createUserError.message, loading: false });
            // Alert.alert('Login', createUserError.message);
          });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label={'Email'}
            placeholder={'me@gmail.com'}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label={'Password'}
            placeholder={'password'}
            secureTextEntry
          />
        </CardSection>

        {!!this.state.error &&
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        }

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'red',
    lineHeight: 25
  }
}

export default LoginForm;
