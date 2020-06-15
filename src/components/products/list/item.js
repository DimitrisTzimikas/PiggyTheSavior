/* Libraries */
import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
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
      <Text style={list.text} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={list.cost}>
        {item.cost} {euro}
      </Text>
    </TouchableOpacity>
  );
};

const list = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: second,
    borderRadius: 5,
    margin: 6,
    height: 50,
  },
  text: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontSize: 20,
  },
  cost: {
    flex: 0.4,
    textAlign: 'right',
    fontSize: 20,
  },
});
