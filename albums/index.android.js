import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/android/components/Header';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
