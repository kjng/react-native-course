// Import libraries for making component
import React from 'react';
import { Dimensions, View, Text } from 'react-native';

// Make the component
const Header = (props) => {
  const { headerText, headerView } = styles;

  return (
    <View style={headerView}>
      <Text style={headerText}>{props.title}</Text>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = {
  headerView: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 5, // Shadow for android 5.0+
    position: 'relative',
    marginBottom: 5
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  }
};

// Make the component available elsewhere
export { Header };
