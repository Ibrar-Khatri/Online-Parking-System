import React, { useState } from 'react';
import style from './buttonStyle';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signupWithDetails } from '../../apis/user';
import { signinWithDetails } from '../../apis/user';

function AuthenticationButton(props) {

    return (
        <>
            <Button
                colorScheme="blue"
                isLoading={props.isLoading}
                style={style.buttonStyle}
                disabled={!props.isValid}
                onPress={() => { props.setShowInvalidInput(true); props.handleSubmit() }}>
                {props.buttonType}

            </Button>
        </>
    );
}

export default AuthenticationButton;
