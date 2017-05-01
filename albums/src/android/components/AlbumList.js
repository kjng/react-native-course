import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseJson => this.setState({ albums: responseJson }));
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }

  render() {
    return (
      <View>
        <Text>Album List!</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
