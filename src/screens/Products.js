/* Libraries */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
/* Local Files */
import {home} from '../navigations/screen_names.js';
import Header from '../components/products/list/header.js';
import Item from '../components/products/list/item.js';
import Buttons from '../components/products/buttons.js';
import TopInputs from '../components/products/top_inputs.js';

export default ({navigation, route}) => {
  const save = () => navigation.navigate(home);
  const cancel = () => navigation.navigate(home);

  return (
    <View style={products.style}>
      <TopInputs />
      {/* <FlatList
        style={products.list}
        data={products}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => <Header />}
        renderItem={({item}) => <Item item={item} />}
        ListFooterComponent={() => <View style={products.footer} />}
      /> */}
      <Buttons onPressSave={save} onPressCancel={cancel} />
    </View>
  );
};

const products = StyleSheet.create({
  style: {
    flex: 1,
  },
  list: {flex: 1},
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  footer: {height: 80},
});
