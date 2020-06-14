/* Libraries */
import React from 'react';
import {FlatList, View} from 'react-native';
/* Local Files */
import Header from '../../components/expenses_list/header.js';
import Item from '../../components/expenses_list/item.js';

export default ({style, data, edit, toggle}) => (
  <FlatList
    style={style.listStyle}
    data={data}
    keyExtractor={item => item.id}
    stickyHeaderIndices={[0]}
    ListHeaderComponent={<Header length={data.length} />}
    renderItem={({item}) => (
      <Item
        item={item}
        onPress={() => edit(item.id)}
        onLongPress={() => toggle(item.id)}
      />
    )}
    ListFooterComponent={<View style={style.listFooter} />}
  />
);
