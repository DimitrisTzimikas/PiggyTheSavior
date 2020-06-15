/* Libraries */
import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import CheckBox from '@react-native-community/checkbox';
/* Local Files */
import {second} from '../../styles/colors.js';
import {decimal} from '../../functions/decimal.js';
import {euro} from '../../styles/signs.js';

export default ({item, onPress, showCheckBox, updateArray}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onValueChange = () => {
    updateArray(item.id, !toggleCheckBox);
    setToggleCheckBox(!toggleCheckBox);
  };

  return (
    <TouchableOpacity activeOpacity={1} style={list.button} onPress={onPress}>
      {showCheckBox ? (
        <CheckBox
          style={list.checkBox}
          value={toggleCheckBox}
          onValueChange={onValueChange}
        />
      ) : null}
      <View style={list.view}>
        <TextTicker
          style={list.text}
          duration={4000}
          loop
          repeatSpacer={50}
          marqueeDelay={3000}>
          {item.title}
        </TextTicker>
      </View>
      <Text style={list.budget}>
        {decimal(item.budget)}
        {euro}
      </Text>
      <Text style={list.remainder}>
        {decimal(item.remainder)}
        {euro}
      </Text>
    </TouchableOpacity>
  );
};

const list = StyleSheet.create({
  button: {
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
  budget: {
    textAlign: 'right',
    fontSize: 20,
    paddingLeft: 2,
    paddingRight: 2,
  },
  remainder: {
    flex: 0.28,
    textAlign: 'right',
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 10,
  },
  checkBox: {
    height: 50,
    width: 50,
  },
});
