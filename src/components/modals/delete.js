/* Libraries */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
/* Local Files */
import Button from '../button.js';
import {modalButton} from '../../styles/colors.js';

export default ({isVisible, toggleDeleteModal, delItem}) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={toggleDeleteModal}
    backdropColor={modalButton}
    backdropOpacity={0.8}
    hideModalContentWhileAnimating={true}
    useNativeDriver={true}>
    <View style={modal.style}>
      <Text style={modal.text}>{'Are you sure you want to delete item?'}</Text>
      <Button text={'delete'} onPress={delItem} />
    </View>
  </Modal>
);

const modal = StyleSheet.create({
  style: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  text: {
    fontSize: 20,
  },
});
