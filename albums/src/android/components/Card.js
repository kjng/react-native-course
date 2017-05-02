import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { cardStyle } = styles;

  return (
    <View style={cardStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 5
  }
};

export default Card;
