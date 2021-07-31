import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'native-base';
import AuthenticationButton from '../button/button'
import style from './signinCardStyle'


function SigninCard(props) {


  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <>
      <View style={style.card}>
        <View>
          <Text style={style.loginText}>Login</Text>
          <View style={style.fieldView}>
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
              style={style.emailInput}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <AuthenticationButton buttonType='Signin' email={email} password={password} navigation={props.navigation} />
            <View style={style.messageText}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('signup-screen')}>
                <Text style={style.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default SigninCard;

