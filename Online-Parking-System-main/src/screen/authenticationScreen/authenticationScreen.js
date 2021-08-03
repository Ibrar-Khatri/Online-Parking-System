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
      console.log('user id >>>>' + value)
      getUserDetailsById({ uid: value })
        .then(user => {
          console.log(user.data.user)
          dispatch({ type: 'addUserDetails', payload: user.data.user })
        })
        .catch(err => {
          console.log('error in get user details from authentication => ' + err)
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
