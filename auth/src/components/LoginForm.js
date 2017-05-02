import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
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

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
