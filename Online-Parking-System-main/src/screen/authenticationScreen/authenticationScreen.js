import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';
import { getUserDetailsById } from '../../apis/userApis';
import SplashScreen from 'react-native-splash-screen'
import NetworkErrorScreen from './networkErrorScreen/networkErrorScreen';

const Stack = createStackNavigator();

function AuthenticationScreen({ navigation }) {
  const dispatch = useDispatch();

  let [isLoading, setIsLoading] = useState(false)
  let [initialRouteName, setInitialRouteName] = useState('');

  let isUserLogin = async () => {
    let value = await AsyncStorage.getItem('userID')

    if (value !== null) {
      //we get user id  from value
      getUserDetailsById({ uid: value })
        .then(user => {
          if (user.data.status) {
            dispatch({ type: 'addUserDetails', payload: user.data.user });
            navigation.reset({
              index: 0,
              routes: [{ name: 'drawer' }],
            });
            SplashScreen.hide()
            return;
          } else {
            setInitialRouteName('signin-screen');
            SplashScreen.hide()
            return;
          }
        })
        .catch(err => {
          setInitialRouteName('network-error-screen');
          SplashScreen.hide()
          return
        });
      return
    } else {
      setInitialRouteName('signin-screen');
      SplashScreen.hide()
      return;
    }
  };

  useEffect(() => {
    isUserLogin();
  }, []);
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRouteName}>
        <Stack.Screen name="signin-screen" component={SigninScreen} />
        <Stack.Screen name="signup-screen" component={SignupScreen} />
        <Stack.Screen
          name="network-error-screen"
          component={NetworkErrorScreen}
          initialParams={{ isUserLogin, isLoading, setIsLoading }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthenticationScreen;
