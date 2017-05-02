import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/ios/components/Header';
import AlbumList from './src/ios/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
