import React from 'react';
import style from './buttonStyle';
import { Button } from 'native-base';
// import firebase from '../../firebase/firebase'
import { signupWithDetails } from '../../apis/user';

function AuthenticationButton(props) {
    // let signupWithDetails = () => {
    //     // console.log(props.email, props.password)

    //     firebase.auth().createUserWithEmailAndPassword(props.email, props.password)
    //         .then(user => {
    //             console.log(user)
    //         })
    //         .catch(err => {
    //             console.log('unable to create user', err)
    //         })
    // }

    function signupWithDet() {
        signupWithDetails({
            email: props.email,
            password: props.password,
        })
            .then(res => {
                console.log(res + 'responed data');
            })
            .catch(err => {
                console.log(err, 'error in signup');
            });
        // console.log(JSON.stringify(ret) + 'ret data');
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
