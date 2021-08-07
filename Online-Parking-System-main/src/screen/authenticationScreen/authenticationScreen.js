import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import SigninScreen from './signin/signinScreen';
import SignupScreen from './signup/signupScreen';
import {getUserDetailsById} from '../../apis/user';

const Stack = createStackNavigator();

function AuthenticationScreen({navigation}) {
  let [isLogin,setIsLogin] = useState(true)
  const dispatch = useDispatch();

  let isUserLogin = async () => {
    const value = await AsyncStorage.getItem('userID');
    if (value !== null) {
      //we get user id  from value
      // setIsLogin(true)
      getUserDetailsById({uid: value})
        .then(user => {
          
          dispatch({type: 'addUserDetails', payload: user.data.user});
          setIsLogin(false)
          navigation.reset({
            index: 0,
            routes: [{name: 'main-screen'}],
          });
          return
        })
        .catch(err => {
          console.log('User details cannot be found');
          setIsLogin(false)
          navigation.reset({
            index: 0,
            routes: [{name: 'main-screen'}],
            params:{userId:}
          });
        });
    } else {
      // setIsLogin(true)
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'authentication-screen'}],
      // });
      setIsLogin(false)
      return;
    }

  };

  useEffect(() => {
    isUserLogin();
  }, []);
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
    {
      isLogin?<Text>Loading</Text>:<>
        <Stack.Screen name="signin-screen" component={SigninScreen} />
        <Stack.Screen name="signup-screen" component={SignupScreen} />
      </>
      }
      </Stack.Navigator>
    </>
  );
}

export default AuthenticationScreen;
