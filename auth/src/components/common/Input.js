import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry, autoCapitalize = 'sentences' }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2.5,
    position: 'relative',
    top: 3
  },
  labelStyle: {
    color: 'steelblue',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  }
};

export { Input };
