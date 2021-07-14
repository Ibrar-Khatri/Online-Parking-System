import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';

const Stack = createStackNavigator();

function AuthenticationScreen() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signin-screen" component={SigninScreen} />
        <Stack.Screen name="signup-screen" component={SignupScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthenticationScreen;
