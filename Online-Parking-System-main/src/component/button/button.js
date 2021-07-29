import React from 'react'
import style from './buttonStyle'
import { Button } from 'native-base'
import firebase from '../../firebase/firebase'

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


    return <>
        {/* <Button colorScheme="blue" style={style.buttonStyle} onPress={signupWithDetails} > */}
        <Button colorScheme="blue" style={style.buttonStyle} >
            {props.buttonType}
        </Button>
    </>
}

export default AuthenticationButton