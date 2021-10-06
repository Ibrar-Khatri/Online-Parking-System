/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image, Platform, StatusBar, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { heightPercentageToDP as vh } from './src/responsive/responsive';
import AuthenticationScreen from './src/screen/authenticationScreen/authenticationScreen';
import MyDrawer from './src/screen/myDrawer/myDrawer';
import FeatureScreen from './src/screen/featureScreen/featureScreen';
import { useDispatch, useSelector } from 'react-redux';
import { LogBox } from 'react-native';
import appSetting from './appSetting/appSetting';
import io from 'socket.io-client';
import { isAdmin } from './src/lib/helperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs([
  'Warning: ...',
  'Non-serializable values were found in the navigation state',
]);

const Stack = createStackNavigator();

const App = () => {
  let socket = io(appSetting.severHostedUrl);
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let dispatch = useDispatch();
  let navigation = useNavigation()

  useEffect(() => {
    if (userDetails?.uid) {
      socket.on('newUserAdded', user => {
        if (isAdmin(userDetails)) {
          dispatch({ type: 'addNewUserInAllUsers', payload: user })
        }
      })

      socket.on('userDeletedNotifyToUser', async uid => {
        dispatch({ type: 'removeAllBookingsOfDeletedUser', payload: uid });
        if (userDetails.uid === uid) {
          await AsyncStorage.removeItem('userID');
          navigation.reset({
            index: 0,
            routes: [{ name: 'authentication-screen', params: { message: 'Admin removed your account' } }],
          });
        }
        if (isAdmin(userDetails)) {
          dispatch({ type: 'removeUserFromAllUsers', payload: uid });
        }
      });
      socket.on('newParkingArea', newParking => {
        dispatch({ type: 'addNewLocation', payload: newParking });
      });
      socket.on('parkingAreaRemovedByAdmin', removedParkingAreaDet => {
        dispatch({ type: 'removeLocation', payload: removedParkingAreaDet });
      });
      socket.on('new-booking-added', (newBooking) => {
        dispatch({ type: 'addNewBookingInSelectedArea', payload: newBooking });
        if (isAdmin(userDetails) || userDetails.uid === newBooking.userId) {
          dispatch({ type: 'addNewBooking', payload: newBooking });
        }
      })
      socket.on('bookingDeleted', bookingID => {
        dispatch({ type: 'removeUpComingBooking', payload: bookingID.id });
      });
    }
  }, [userDetails.uid]);

  return (
    <>
      <StatusBar backgroundColor="#00bfff" animated={true} />
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="authentication">
          <Stack.Screen
            name="authentication-screen"
            component={AuthenticationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="drawer"
            component={MyDrawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="featureScreen"
            component={FeatureScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </>
  );
};

export default App;
