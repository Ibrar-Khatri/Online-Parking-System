import React, {useState} from 'react';
import style from './buttonStyle';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signupWithDetails} from '../../apis/userApis';
import {signinWithDetails} from '../../apis/userApis';

function AuthenticationButton({isLoading,setShowInvalidInput,handleSubmit,buttonType}) {
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
        {buttonType}
      </Button>
    </>
  );
}

export default AuthenticationButton;
