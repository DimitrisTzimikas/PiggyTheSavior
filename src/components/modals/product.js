/* Libraries */
import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
/* Local Files */
import Button from '../../components/button.js';
import colors from '../../styles/colors.js';
import {euro} from '../../styles/signs.js';
export default ({
  isVisible,
  toggle,
  product,
  changeProductName,
  changeProductCost,
}) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={() => toggle('', false)}
    backdropColor={colors.modalButton}
    backdropOpacity={0.8}
    hideModalContentWhileAnimating={true}
    useNativeDriver={true}>
    <View style={styles.style}>
      <View style={styles.viewText}>
        <Text style={styles.textNameBudget}>Name</Text>
        <Text style={styles.textNameBudget}>Cost</Text>
      </View>
      <View style={styles.viewText}>
        <TextInput
          style={styles.textInputTitle}
          numberOfLines={1}
          placeholder={'Product'}
          multiline={false}
          value={product.name}
          onChangeText={changeProductName}
          onSubmitEditing={() => toggle('', false)}
        />

        <TextInput
          style={styles.textInputCost}
          placeholder={euro}
          keyboardType={'numeric'}
          value={product.cost}
          onChangeText={changeProductCost}
          onSubmitEditing={() => toggle('', false)}
        />
      </View>

      <View style={styles.viewButton}>
        <Button text={'Back'} onPress={() => toggle('', false)} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  style: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  textGlobe: {
    fontSize: 28,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  textNameBudget: {
    fontSize: 20,
    textAlign: 'center',
  },
  textInputTitle: {
    backgroundColor: 'white',
    justifyContent: 'center',

    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',

    height: 40,
    width: '45%',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  textInputCost: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    height: 40,
    marginTop: 10,
    marginBottom: 20,
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  viewButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'transparent',
  },
});
