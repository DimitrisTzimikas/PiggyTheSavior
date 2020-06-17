/* Libraries */
import React from 'react';
import {View, FlatList} from 'react-native';
/* Local Files */
import Header from '../../components/expenses_list/header.js';
import Item from '../../components/expenses_list/item.js';

export default ({
  style,
  data,
  editItem,
  showCheckBox,
  toggleCheckBox,
  toggleExpenseCheckbox,
  isSelectAll,
  toggleSelectAll,
}) => (
  <FlatList
    style={style.listStyle}
    data={data}
    keyExtractor={item => item.id}
    stickyHeaderIndices={[0]}
    ListHeaderComponent={
      <Header
        length={data.length}
        showCheckBox={showCheckBox}
        isSelectAll={isSelectAll}
        toggleSelectAll={toggleSelectAll}
      />
    }
    renderItem={({item}) => (
      <Item
        item={item}
        onPress={() => editItem(item.id)}
        onLongPress={() => toggleCheckBox(item.id)}
        showCheckBox={showCheckBox}
        toggleExpenseCheckbox={() => toggleExpenseCheckbox(item.id)}
      />
    )}
    ListFooterComponent={<View style={style.listFooter} />}
  />
);
