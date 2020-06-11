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
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    bottom: 20,
  },
});
