import React from 'react'
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import style from './bookingsTabStyle'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PastBookings from './pastBookings/pastBookings';
import CurrentBookings from './currentBookings/currentBookings';
import UpcomingBookings from './upComingBookings/upComingBookings';

const Tab = createBottomTabNavigator();

function BookingsTab() {
    return <>
        <Tab.Navigator
            initialRouteName="past-booking"
            backBehavior="past-booking"
            screenOptions={() => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => <></>,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#00bfff',
                tabBarInactiveBackgroundColor: '#e5e4e2',
                tabBarLabelStyle: style.tabBarLabelStyle,
                tabBarItemStyle: style.tabBarItemStyle,
                tabBarStyle: style.tabBarStyle,
            })}
        >
            <Tab.Screen name="past-booking" options={{
                tabBarLabel: 'Past',
            }} component={PastBookings} />
            <Tab.Screen name="current-booking" options={{
                tabBarLabel: 'Now',
            }} component={CurrentBookings} />
            <Tab.Screen name="upcoming-booking" options={{
                tabBarLabel: 'Upcoming',
            }} component={UpcomingBookings} />
        </Tab.Navigator>
    </>


}
export default BookingsTab