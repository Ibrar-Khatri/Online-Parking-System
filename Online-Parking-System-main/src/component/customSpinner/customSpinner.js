import React, { useState } from 'react';
import {
  Modal,
  Spinner,
  HStack,
} from 'native-base';

function CustomSpinner({ isLoading }) {
  return (
    <>
      <Modal
        isOpen={isLoading}>
        <HStack space={2}>
          <Spinner accessibilityLabel="Loading posts" />
        </HStack>
      </Modal>
    </>
  );
}

export default CustomSpinner;
