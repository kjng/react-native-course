import React, { Component } from 'react';
import { Dimensions, TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{ height: 45, width: width * 0.94 }} />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const { width } = Dimensions.get('window');

export default LoginForm;
