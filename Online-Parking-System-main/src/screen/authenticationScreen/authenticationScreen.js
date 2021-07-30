import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';

const Stack = createStackNavigator();

function AuthenticationScreen({ navigation }) {

  let isUserLogin = async () => {
    const value = await AsyncStorage.getItem('userID')
    if (value !== null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home-screen' }],
      });
      return

    }
  }

  useEffect(() => {
    isUserLogin()
  }, [])

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
