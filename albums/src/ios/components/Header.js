import React from 'react';
import { Dimensions, View, Text } from 'react-native';

const Header = ({ title }) => {
  const { headerText, headerView } = styles;

  return (
    <View style={headerView}>
      <Text style={headerText}>{title}</Text>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = {
  headerView: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    paddingTop: 17,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    position: 'relative',
    marginBottom: 5
  },
  headerText: {
    fontSize: 20
  }
};

export default Header;
