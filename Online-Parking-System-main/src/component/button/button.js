import React from 'react';
import style from './buttonStyle';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signupWithDetails } from '../../apis/user';

function AuthenticationButton(props) {

    function signupWithDet() {
        let userDetails = {
            email: props.email,
            password: props.password,
        }
        signupWithDetails(userDetails)
            .then(async res => {
                console.log(JSON.stringify(res.data.user.user.uid) + 'responed data');
                await AsyncStorage.setItem('userID', res.data.user.user.uid)
            })
            .catch(err => {
                console.log(err, 'error in signup');
            });
    }

    return (
        <>
            <Button
                colorScheme="blue"
                style={style.buttonStyle}
                onPress={signupWithDet}>
                {props.buttonType}
            </Button>
        </>
    );
}

export default AuthenticationButton;
