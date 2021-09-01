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

  let [isLogin, setIsLogin] = useState(true);
  let [isLoading, setIsLoading] = useState(false)
  let [initialRouteName, setInitialRouteName] = useState('network-error-screen');

  let isUserLogin = async () => {
    const value = await AsyncStorage.getItem('userID');
    if (value !== null) {
      //we get user id  from value
      getUserDetailsById({ uid: value })
        .then(user => {
          console.log('positve response')
          if (user.data.status) {
            dispatch({ type: 'addUserDetails', payload: user.data.user });
            SplashScreen.hide()
            navigation.reset({
              index: 0,
              routes: [{ name: 'main-screen' }],
            });
            return;
          }
          SplashScreen.hide()
          setIsLogin(false);
          setInitialRouteName('network-error-screen');
        })
        .catch(err => {
          SplashScreen.hide()
          console.log(err)
          setIsLogin(false);
          setInitialRouteName('network-error-screen');
        });
    } else {
      SplashScreen.hide()
      setInitialRouteName('signin-screen');
      setIsLogin(false);
      return;
    }
  };

  useEffect(() => {
    isUserLogin();
  }, []);
  return (
    <>
      {/* {isLogin ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <> */}
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
      {/* </>
      )} */}
    </>
  );
}

export default AuthenticationScreen;
