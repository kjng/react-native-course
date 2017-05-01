import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
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
