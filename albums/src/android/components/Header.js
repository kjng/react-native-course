// Import libraries for making component
import React from 'react';
import { Dimensions, View, Text } from 'react-native';

// Make the component
const Header = () => {
  const { headerText, headerView } = styles;

  return (
    <View style={headerView}>
      <Text style={headerText}>Albums</Text>
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
    elevation: 5, // Shadow for android 5.0+
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  }
};

// Make the component available elsewhere
export default Header;
