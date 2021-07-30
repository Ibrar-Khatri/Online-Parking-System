import React from 'react';
import style from './buttonStyle';
import { Button } from 'native-base';
// import firebase from '../../firebase/firebase'
import { signupWithDetails } from '../../apis/user';

function AuthenticationButton(props) {

    function signupWithDet() {
        signupWithDetails({
            email: props.email,
            password: props.password,
        })
            .then(res => {
                console.log(JSON.stringify(res.data) + 'responed data');
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
