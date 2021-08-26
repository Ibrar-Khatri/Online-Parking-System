import React, { useState } from 'react';
import style from './buttonStyle';
import { Button,Text } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthenticationButton({ isLoading, setShowInvalidInput, handleSubmit, buttonType }) {
  return (
    <>
      <Button
        colorScheme="blue"
        isLoading={isLoading}
        style={style.buttonStyle}
        disabled={isLoading}
        onPress={() => {
          setShowInvalidInput(true);
          handleSubmit();
        }}>
        <Text style={style.buttonText}>
          {buttonType}
        </Text>
      </Button>
    </>
  );
}

export default AuthenticationButton;
