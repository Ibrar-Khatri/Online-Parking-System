/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform, StatusBar,
  Text
} from 'react-native';
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
import io from 'socket.io-client'
import { isAdmin } from './src/lib/helperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';


LogBox.ignoreLogs(['Warning: ...', 'Non-serializable values were found in the navigation state'])

const Stack = createStackNavigator();

const App = () => {

  let socket = io(appSetting.severHostedUrl)
  let dispatch = useDispatch()
  useEffect(async () => {
    let userDetails = await useSelector(state => state.userReducer.userDetails);
    socket.on('userDeletedNotifyToUser', async (userDet) => {
      console.log(userDetails.uid)
      if (userDetails.uid === userDet.uid) {
        await AsyncStorage.removeItem('userID')
        dispatch({ type: 'removeUserDetails' })
        dispatch({ type: 'removeCurrentUserBooking' })
        navigation.reset({
          index: 0,
          routes: [{ name: 'authentication-screen' }],
        });
      }
      if (isAdmin(userDetails)) {
        dispatch({ type: 'removeUserFromAllUsers', payload: userDet.uid })
      }
      dispatch({ type: 'removeAllBookingsOfDeletedUser', payload: userDet.uid })
    })
    socket.on('newParkingArea', (newParking) => {
      dispatch({ type: 'addNewLocation', payload: newParking })
    })
    socket.on('parkingAreaRemovedByAdmin', (removedParkingAreaDet) => {
      dispatch({ type: 'removeLocation', payload: removedParkingAreaDet })
    })
    socket.on('bookingDeleted', (bookingID) => {
      dispatch({ type: 'removeUpComingBooking', payload: bookingID.id })
    })
    socket.on('new-booking-added', ({ newBooking, userDetails }) => {
      dispatch({ type: 'addNewBookingInSelectedArea', payload: newBooking })
      if (isAdmin(userDetails) || userDetails.uid === newBooking.userId) {
        dispatch({ type: 'addNewBooking', payload: newBooking })
      }
    })
  }, [])
  // console.log(JSON.stringify(userDetails))

  return (
    <>
      <StatusBar backgroundColor='#00bfff' animated={true} />
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='authentication'>
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
                // title: 'Online Parking System',
                // headerTitleAlign: 'center',
                // headerStyle: {
                //   backgroundColor: '#00bfff',
                //   height: vh(7),
                // },
                // headerTitleStyle: {
                //   fontWeight: 'bold',
                //   lineHeight: vh(4),
                //   marginBottom: 0,
                //   color: 'white',
                //   fontFamily:
                //     Platform.OS === 'ios'
                //       ? 'DM Serif Display'
                //       : 'sans-serif-condensed',
                //   fontSize: vh(3.5),
                // }
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
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
