import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { card } = styles;

  return (
    <View style={card}>
      {props.children}
    </View>
  );
};

const styles = {
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 5
  }
};

export default Card;
