import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAllBookings } from '../../apis/bookingApis';
import { createDrawerNavigator } from '@react-navigation/drawer';
import style from './myDrawerStyle'
import Home from './home/home';
import BookingTab from './bookingsTab/bookingsTab';
import MyDrawerContent from '../../component/myDrawerContent/myDrawerContent';
import { CircleIcon, HamburgerIcon, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';
import { Image } from 'react-native';
import AddNewParkingArea from './addNewParkingArea/addNewParkingArea';
import AllUsersLIst from './userList/userList';




const Drawer = createDrawerNavigator();

function MyDrawer() {
  let dispatch = useDispatch();
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let bookings = useSelector(state => state.bookingReducer.userBookings);
  let [navigationState, setNavigationState] = useState('')

  useEffect(() => {
    if (!bookings) {
      getUsersAllBookings({ userId: userDetails.uid })
        .then(res => {
          if (res.data.status) {
            return dispatch({ type: 'userBookings', payload: res.data.bookings });
          }
        })
        .catch(err => {
          console.log('Error in get all bookings');
        });
    }
  }, [])
  return (
    // <Tab.Navigator
    //   initialLayout={vh(10)}
    //   tabBarOptions={{
    //     activeTintColor: 'black',
    //     inactiveTintColor: 'white',
    //     style: {
    //       backgroundColor: '#00bfff',
    //     },
    //     labelStyle: {
    //       fontSize: vh(1.8),
    //       lineHeight: vh(3),
    //     },
    //     indicatorStyle: {
    //       backgroundColor: 'white',
    //       height: 2.5,
    //     },
    //   }}
    //   tabBarStyle = {{ height: vh(10), backgroundColor: 'red' }}
    // >
    //   <Tab.Screen
    //     name="home-screen"
    //     component={Home}
    //     options={{
    //       title: 'Home',
    //     }}
    //   />
    //   <Tab.Screen
    //     name="myBooking-screen"
    //     component={MyBooking}
    //     options={{
    //       title: 'Past Bookings',
    //     }}
    //     tabBarVisible="false"
    //   />
    //   <Tab.Screen
    //     name="account-screen"
    //     component={UpComingBookings}
    //     options={{ title: 'Upcoming Bookins' }}
    //   />
    //   {/* <Tab.Screen
    //       name="admin-screen"
    //       component={Admin}
    //       options={{title: 'Admin'}}
    //     /> */}
    // </Tab.Navigator>
    // screenOptions={{
    //   title: 'Online Parking System',
    //   headerTitleAlign: 'center',
    //   headerStyle: {
    //     backgroundColor: '#00bfff',
    //     height: vh(7),
    //   },
    //   headerLeft: ({ navigation, route }) => <Text onPress={() => navigation.openDrawer()}>Hello</Text>,
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     lineHeight: vh(4),
    //     marginBottom: 0,
    //     color: 'white',
    //     fontFamily:
    //       Platform.OS === 'ios'
    //         ? 'DM Serif Display'
    //         : 'sans-serif-condensed',
    //     fontSize: vh(3.5),
    //   }
    // }} 
    // <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Navigator screenOptions={{
      title: 'Online Parking System',
      headerTitleStyle: style.headerTitleStyle,
      headerStyle: style.headerStyle,
      drawerStyle: style.drawerStyle,
      headerLeft: (() => <TouchableOpacity onPress={() => navigationState.openDrawer()} >
        <Image resizeMode='contain' source={require('../../assets/hamburgerIcon.png')} style={style.hamburgerIconView} />
      </TouchableOpacity>),
      drawerType: 'front',
      drawerActiveTintColor: '#00bfff',
      drawerInactiveTintColor: 'black',
      drawerLabelStyle: style.drawerLabelStyle,
    }} drawerContent={(props) => <MyDrawerContent {...props} />} >
      {
        userDetails.uid === 'izzQ49T0TDRypHOAFEpBXgy2oqP2' ? <>
          <Drawer.Screen name="addNewParkingArea" component={AddNewParkingArea} initialParams={{ setNavigationState }} options={{ drawerLabel: 'Parking Areas' }} />
          <Drawer.Screen name="userList" component={AllUsersLIst} options={{ drawerLabel: 'Users' }} />
        </> : <>
          <Drawer.Screen name="home" component={Home} initialParams={{ setNavigationState }} options={{ drawerLabel: 'Home' }} />
        </>
      }
      <Drawer.Screen name="booking" component={BookingTab} options={{ drawerLabel: 'Bookings' }} />
    </Drawer.Navigator>
  )

}
export default MyDrawer;
