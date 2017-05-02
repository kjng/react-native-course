import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { section } = styles;

  return (
    <View style={section}>
      {props.children}
    </View>
  );
};

const styles = {
  section: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
