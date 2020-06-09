/* Libraries */
import React from 'react';
import {View, StyleSheet} from 'react-native';
/* Local Files */
import Button from '../../components/button.js';

export default ({onPressSave, onPressCancel, style}) => {
  return (
    <View style={[buttons.container, style]}>
      <Button text={'Save'} onPress={onPressSave} />
      <Button text={'Cancel'} onPress={onPressCancel} />
    </View>
  );
};

const buttons = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    bottom: 20,
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'transparent',
  },
});
