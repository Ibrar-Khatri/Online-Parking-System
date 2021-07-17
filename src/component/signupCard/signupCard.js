import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../responsive/responsive';
import AuthenticationButton from '../button/button';
import style from './signUpCardStyle';
import firebase from 'firebase';

function SignupCard(props) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');




  return (
    <>
      <View style={style.card}>
        <View>
          <Text style={style.signUpText}>Signup</Text>
          <View style={style.fieldView}>
            <Input
              variant="underlined"
              placeholder="Name"
              style={style.emailInput}
              onChangeText={setName}
              value={name}
            />
            <Input
              variant="underlined"
              placeholder="Email"
              style={style.emailInput}
              onChangeText={setEmail}
              value={email}
            />
            <Input
              variant="underlined"
              type="password"
              placeholder="Password"
              style={style.passwordInput}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <AuthenticationButton buttonType="Signup" email={email} password={password} />
            <View style={style.messageText}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={style.loginText}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default SignupCard;
