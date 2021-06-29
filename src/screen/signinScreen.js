import React, {useState} from 'react';
import {Text, View} from 'react-native';
import InputFieldComponent from '../../src/component/signinCard';

function SigninScreen() {
  let [email, setEmail] = useState('');
  let [pswd, setPswd] = useState('');
  return (
    <>
      <View
        style={{
          backgroundColor: 'blue',
          height: 250,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <InputFieldComponent />
      </View>
    </>
  );
}

export default SigninScreen;
