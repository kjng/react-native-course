import React from 'react';
import { Linking, View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, url, image, thumbnail_image } = album;
  const {
    artistContent,
    artistContentTitle,
    artistImage,
    artistImageContainer,
    albumImage
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={artistImageContainer}>
          <Image
            style={artistImage}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={artistContent}>
          <Text style={artistContentTitle}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumImage}
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
  artistContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  artistContentTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  artistImage: {
    height: 50,
    width: 50
  },
  artistImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 5
  },
  albumImage: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default AlbumDetail;
