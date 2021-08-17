import React from 'react'
import { ScrollView, Text, View } from "react-native";
import MyBookingCard from '../../../component/myBookingCard/myBookingCard';
import style from './myBookingStyle'



function MyBookingScreen() {
    return <>

        <ScrollView>
            <View><Text style={style.myBookingText}>My Bookings</Text></View>
            <View>
                <MyBookingCard />
            </View>
        </ScrollView>

    </>


}

export default MyBookingScreen


















