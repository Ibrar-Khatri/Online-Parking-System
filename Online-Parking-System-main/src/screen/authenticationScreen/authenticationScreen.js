import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';
import { getUserDetailsById } from '../../apis/user';


const Stack = createStackNavigator();

function AuthenticationScreen() {

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signin-screen" component={SigninScreen} />
        <Stack.Screen name="signup-screen" component={SignupScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthenticationScreen;