import React from 'react';
import { AppRegistry, View } from 'react-native';
import App from './src/App';

const Auth = () => (
  <View style={{ flex: 1 }}>
    <View style={{ paddingTop: 15, backgroundColor: 'steelblue' }} />
    <App />
  </View>
);

AppRegistry.registerComponent('auth', () => Auth);
