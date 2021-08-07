import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetailsById} from '../../apis/user';
import {heightPercentageToDP as vh} from '../../responsive/responsive';
import Account from './account/account';
import Admin from './admin/admin';
import Home from './home/home';
import MyBooking from './myBooking/myBooking';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  // let userDetails = useSelector(state => state.userReducer.userDetails);

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: '#00bfff',
          },
          indicatorStyle: {
            backgroundColor: 'darkblue',
            height: 2.5,
          },
          labelStyle: {
            fontSize: vh(1.5),
          },
          tabBarVisible: 'false',
        }}>
        <Tab.Screen
          name="home-screen"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="myBooking-screen"
          component={MyBooking}
          options={{
            title: 'Bookings',
          }}
          tabBarVisible="false"
        />
        <Tab.Screen
          name="account-screen"
          component={Account}
          options={{title: 'Account'}}
        />
        {/* <Tab.Screen
          name="admin-screen"
          component={Admin}
          options={{ title: 'Admin' }}
        /> */}
      </Tab.Navigator>
    </>
  );
}
export default HomeScreen;
