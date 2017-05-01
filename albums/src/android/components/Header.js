// Import libraries for making component
import React from 'react';
import { Text } from 'react-native';

// Make the component
const Header = () => {
  const { headerText } = styles;

  return <Text style={headerText}>Albums</Text>;
};

const styles = {
  headerText: {
    fontSize: 20
  }
};

// Make the component available elsewhere
export default Header;
