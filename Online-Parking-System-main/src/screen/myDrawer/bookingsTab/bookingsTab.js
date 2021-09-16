import React from 'react'
import { useSelector } from 'react-redux';
import { Image } from 'native-base'
import style from './bookingsTabStyle'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PastBookings from './pastBookings/pastBookings';
import CurrentBookings from './currentBookings/currentBookings';
import UpcomingBookings from './upComingBookings/upComingBookings';
import { heightPercentageToDP } from '../../../responsive/responsive';

const Tab = createBottomTabNavigator();

function BookingsTab() {
    return <>
        <Tab.Navigator
            initialRouteName="past-booking"
            backBehavior="past-booking"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "past-booking") {
                        iconName = require('../../../assets/previousBookingIcon.png')
                    } else if (route.name === "current-booking") {
                        iconName = require('../../../assets/currentBookingIcon.png')
                    } else if (route.name === "upcoming-booking") {
                        iconName = require('../../../assets/upcomingBookingIcon.png')
                    }
                    return <Image resizeMode='contain' source={iconName} style={style.tabsIconStyle} alt='tabIcon' />
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#00bfff',
                tabBarInactiveBackgroundColor: '#e5e4e2',
                tabBarLabelStyle: style.tabBarLabelStyle,
                tabBarItemStyle: style.tabBarItemStyle,
                tabBarStyle: style.tabBarStyle,
                tabBarLabelPosition: 'below-icon'
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