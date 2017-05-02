import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  const { title, artist, url, image, thumbnail_image } = props.album;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AlbumDetail;
