/* Libraries */
import React from 'react';
import {View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
/* Local Files */
import Header from '../../../components/products/list/header.js';
import Item from '../../../components/products/list/item.js';
import HiddenItem from '../../../components/expenses_list/hiddenItem.js';

export default ({
  style,
  data,
  toggleProduct,
  toggleDeleteModal,
  updateArray,
  deleteMultiple,
  showCheckBox,
  toggleCheckBox,
}) => (
  <SwipeListView
    style={style.list}
    data={data}
    keyExtractor={item => item.id}
    stickyHeaderIndices={[0]}
    ListHeaderComponent={() => (
      <Header onPress={() => toggleProduct('', true)} />
    )}
    renderItem={({item}) => (
      <Item
        item={item}
        onPress={() => toggleProduct(item.id, false)}
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
    ListFooterComponent={() => <View style={style.footer} />}
    leftOpenValue={202}
    rightOpenValue={-82}
  />
);
