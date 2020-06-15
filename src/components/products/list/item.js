/* Libraries */
import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import CheckBox from '@react-native-community/checkbox';
/* Local Files */
import {euro} from '../../../styles/signs.js';
import {second} from '../../../styles/colors.js';

export default ({item, onPress, showCheckBox, updateArray}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onValueChange = () => {
    updateArray(item.id, !toggleCheckBox);
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <TouchableOpacity
      style={list.container}
      activeOpacity={1}
      onPress={onPress}>
      {showCheckBox ? (
        <CheckBox
          style={list.checkBox}
          value={toggleCheckBox}
          onValueChange={onValueChange}
        />
      ) : null}
      {/* <Text style={list.text} numberOfLines={1}>
        {item.name}
      </Text> */}
      <View style={list.view}>
        <TextTicker
          style={list.text}
          duration={4000}
          loop
          repeatSpacer={50}
          marqueeDelay={3000}>
          {item.name}
        </TextTicker>
      </View>
      <Text style={list.cost}>
        {item.cost} {euro}
      </Text>
    </TouchableOpacity>
  );
};

const list = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: second,
    borderRadius: 5,
    margin: 6,
    height: 50,
  },
  view: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    textAlignVertical: 'center',
    fontSize: 20,
  },
  cost: {
    flex: 0.28,
    textAlign: 'right',
    fontSize: 20,
    paddingRight: 10,
  },
  checkBox: {
    height: 50,
    width: 50,
  },
});
