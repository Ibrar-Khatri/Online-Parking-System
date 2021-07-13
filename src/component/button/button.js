import React from 'react'
import style from './buttonStyle'
import { Button } from 'native-base'

function AuthenticationButton(props) {

    return <>
        <Button colorScheme="blue" style={style.buttonStyle} >
            {props.buttonType}
        </Button>
    </>
}

export default AuthenticationButton