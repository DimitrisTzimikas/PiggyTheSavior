/* Libraries */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default ({text, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[button.style, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text numberOfLines={1} style={button.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const button = StyleSheet.create({
  style: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    margin: 5,
    marginTop: 10,
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    padding: 5,
    fontWeight: '600',
  },
});
