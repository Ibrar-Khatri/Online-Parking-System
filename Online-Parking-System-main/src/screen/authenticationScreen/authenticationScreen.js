import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';
import { getUserDetailsById } from '../../apis/user';


const Stack = createStackNavigator();

function AuthenticationScreen({ navigation }) {

  const dispatch = useDispatch()


  let isUserLogin = async () => {
    const value = await AsyncStorage.getItem('userID')
    if (value !== null) {
      //we get user id  from value 
      getUserDetailsById({ uid: value })
        .then(user => {
          dispatch({ type: 'addUserDetails', payload: user.data.user })
        })
        .catch(err => {
          console.log('User details cannot be found')
        })

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
