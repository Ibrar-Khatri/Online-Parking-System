import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  Modal,
  Button,
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
  Actionsheet,
} from 'native-base';

function AddBookingSpinner(props) {
  return (
    <>
      <Modal
        isOpen={props.onPressSlot}
        onClose={() => props.setOnPressSlot(false)}>
        <HStack space={2}>
          <Spinner accessibilityLabel="Loading posts" />
        </HStack>
      </Modal>
    </>
  );
}

export default AddBookingSpinner;
