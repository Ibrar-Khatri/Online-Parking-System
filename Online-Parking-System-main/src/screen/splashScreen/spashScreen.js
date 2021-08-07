import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {getUserDetailsById} from '../../apis/user';

function SplashScreen({navigation}) {
  const dispatch = useDispatch();

  let isUserLogin = async () => {
    const value = await AsyncStorage.getItem('userID');
    if (value !== null) {
      //we get user id  from value
      getUserDetailsById({uid: value})
        .then(user => {
          dispatch({type: 'addUserDetails', payload: user.data.user});
          navigation.reset({
            index: 0,
            routes: [{name: 'main-screen'}],
          });
          return;
        })
        .catch(err => {
          console.log('User details cannot be found');
        });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'authentication-screen'}],
      });
      return;
    }
  };

  useEffect(() => {
    isUserLogin();
  }, []);

  return (
    <>
      <View>
        <Text>Loading</Text>
      </View>
    </>
  );
}

export default SplashScreen;
