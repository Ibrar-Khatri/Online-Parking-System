import React from 'react'
import moment from 'moment';
import { Image, ScrollView, Text, View } from "react-native";
import style from './bookingWrapperStyle'



function BookingWrapper({ bookings, title }) {
    return <>
        {
            bookings?.length !== 0 ?
                <ScrollView style={style.bgColor}>
                    <View><Text style={style.myBookingText}>{title}</Text></View>

                    <View style={style.outSideCard} >
                        {
                            bookings?.map((bking, ind) => {
                                return (
                                    <View style={style.bookingCard} key={ind}>
                                        <Text style={style.textStyle}>Location : {bking.location}</Text>
                                        <Text style={style.textStyle}>Slot Name : {bking.slotName}</Text>
                                        <Text style={style.textStyle}>Time :{moment(bking.startTime, 'lll').format(' h:mm a') + " - " + moment(bking.endTime, 'lll').format(' h:mm a')}</Text>
                                        <Text style={style.textStyle}>Date: {moment(bking.startTime, 'lll').format(' D / M / YYYY')}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                : <View style={style.bgColor}>
                    <View style={style.imageView}>
                        <Image style={style.noBookingYetIcon} source={require('../../assets/noBookingYetIcon.jpeg')} />
                        <Text style={style.noBookingsYetText}>No Bookings Yet</Text>
                    </View>
                </View>
        }
    </>
}

export default BookingWrapper


















