import React, { useState } from 'react';
import {
  Modal,
  Spinner,
  HStack,
} from 'native-base';

function AddBookingSpinner({ isLoading, setIsLoading }) {
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

export default AddBookingSpinner;
