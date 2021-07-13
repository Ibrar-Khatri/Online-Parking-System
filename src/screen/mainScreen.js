import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import AccountScreen from './homeScreen/accountScreen';
import AdminScreen from './homeScreen/adminScreen';
import HomeScreen from './homeScreen/homeScreen';
import MyBookingScreen from './homeScreen/myBooking';

const Tab = createMaterialTopTabNavigator();

function MainScreen() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#B0B0B0',
          style: {
            backgroundColor: 'blue',
          },
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="home-screen"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
          tabBarVisible={false}
          headerStyle={{backgroundColor: 'red'}}
        />
        <Tab.Screen
          name="booking-screen"
          component={MyBookingScreen}
          options={{title: 'My Bookings'}}
          tabBarVisible="false"
        />
        <Tab.Screen
          name="account-screen"
          component={AccountScreen}
          options={{title: 'Account'}}
        />
        <Tab.Screen
          name="admin-screen"
          component={AdminScreen}
          options={{title: 'Admin'}}
        />
      </Tab.Navigator>
    </>
  );
}
export default MainScreen;
