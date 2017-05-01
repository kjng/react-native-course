import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <View>
        <Text>Album List!</Text>
        <Text>{this.state.foo}</Text>
      </View>
    );
  }
}

export default AlbumList;
