/* Libraries */
import React from 'react';
import {View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
/* Local Files */
import Header from '../../components/expenses_list/header.js';
import Item from '../../components/expenses_list/item.js';
import HiddenItem from '../../components/expenses_list/hiddenItem.js';

export default ({
  style,
  data,
  editItem,
  toggleDeleteModal,
  updateArray,
  deleteMultiple,
  showCheckBox,
  toggleCheckBox,
}) => (
  <SwipeListView
    style={style.listStyle}
    data={data}
    keyExtractor={item => item.id}
    stickyHeaderIndices={[0]}
    ListHeaderComponent={<Header length={data.length} />}
    renderItem={({item}) => (
      <Item
        item={item}
        onPress={() => editItem(item.id)}
        showCheckBox={showCheckBox}
        updateArray={updateArray}
      />
    )}
    renderHiddenItem={({item}) => (
      <HiddenItem
        deleteItem={() => toggleDeleteModal(item.id)}
        selectMultiple={toggleCheckBox}
        deleteMultiple={deleteMultiple}
      />
    )}
    ListFooterComponent={<View style={style.listFooter} />}
    leftOpenValue={202}
    rightOpenValue={-82}
  />
);
