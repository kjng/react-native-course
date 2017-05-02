import React from 'react';
import { Linking, View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, url, image, thumbnail_image } = album;
  const {
    artistContentStyle,
    artistImageStyle,
    artistImageContainerStyle,
    artistContentTitleStyle,
    albumImageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={artistImageContainerStyle}>
          <Image
            style={artistImageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={artistContentStyle}>
          <Text style={artistContentTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumImageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  artistContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  artistContentTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  artistImageStyle: {
    height: 50,
    width: 50
  },
  artistImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
