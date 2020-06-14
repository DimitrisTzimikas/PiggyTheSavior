/* Libraries */
import React from 'react';
import {FlatList, View} from 'react-native';
/* Local Files */
import Header from '../../../components/products/list/header.js';
import Item from '../../../components/products/list/item.js';

export default ({style, data, toggleProduct, toggleDelete}) => (
  <FlatList
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
        onLongPress={() => toggleDelete(item.id)}
      />
    )}
    ListFooterComponent={() => <View style={style.footer} />}
  />
);
