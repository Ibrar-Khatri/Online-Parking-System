import React, { useState } from 'react';
import style from './buttonStyle';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signupWithDetails } from '../../apis/user';
import { signinWithDetails } from '../../apis/user';

function AuthenticationButton(props) {


    function signupWithDet() {

        setIsLoading(true)
        let userDetails = {
            email: props.email,
            password: props.password,
        }

        if (props.buttonType === 'Signup') {
            signupWithDetails(userDetails)
                .then(async res => {
                    console.log(JSON.stringify(res.data.user) + 'responed data');
                    await AsyncStorage.setItem('userID', res.data.user.user.uid)
                    setIsLoading(false)
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'home-screen' }],
                    });
                })
                .catch(err => {
                    console.log(err, 'error in signup');
                });
        }

        else if (props.buttonType === 'Signin') {
            signinWithDetails(userDetails)
                .then(async res => {
                    console.log(JSON.stringify(res.data.user) + 'responed data');
                    await AsyncStorage.setItem('userID', res.data.user.user.uid)
                    setIsLoading(false)
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'home-screen' }],
                    });
                })
                .catch(err => {
                    console.log(err, 'error in signup');
                });
        }
    }


    let [isLoading, setIsLoading] = useState(false)


    return (
        <>
            <Button
                colorScheme="blue"
                isLoading={isLoading}
                style={style.buttonStyle}
                onPress={signupWithDet}>
                {props.buttonType}
            </Button>
        </>
    );
}

export default AuthenticationButton;
