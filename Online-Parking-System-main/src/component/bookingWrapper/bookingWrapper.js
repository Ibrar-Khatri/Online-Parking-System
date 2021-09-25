import React from 'react'
import moment from 'moment';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from './bookingWrapperStyle'
import { deleteUpcomingBooking } from '../../apis/bookingApis';
import { io } from 'socket.io-client';
import appSetting from '../../../appSetting/appSetting';



function BookingWrapper({ bookings, title, message, upCcomingBooking }) {
    let socket = io(appSetting.severHostedUrl)

    function deleteUpComingBooking(bookingId) {
        let bookingID = {
            id: bookingId
        }
        deleteUpcomingBooking(bookingID)
            .then(res => {
                socket.emit('upcomingBookingDeleted', bookingID)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return <>
        <View style={style.myBookingTextView}><Text style={style.myBookingText}>{title}</Text></View>
        {
            bookings?.length !== 0 ?
                <ScrollView style={style.bgColor}>
                    <View style={style.outSideCard} >
                        {
                            bookings?.map((bking, ind) => {
                                return (
                                    <View style={style.bookingCard} key={ind}>
                                        <View style={style.bookingCardText}>
                                            <Text style={style.textStyle}>Location : {bking.location}</Text>
                                            <Text style={style.textStyle}>Slot Name : {bking.slotName}</Text>
                                            <Text style={style.textStyle}>Time :{moment(bking.startTime, 'lll').format(' h:mm a') + " - " + moment(bking.endTime, 'lll').format(' h:mm a')}</Text>
                                            <Text style={style.textStyle}>Date: {moment(bking.startTime, 'lll').format(' D / M / YYYY')}</Text>
                                        </View>
                                        {
                                            upCcomingBooking && <TouchableOpacity style={style.deleteIconStyleView} onPress={() => deleteUpComingBooking(bking.id)}>
                                                <Image alt='delete icon' source={require('../../assets/deleteIcon.png')} style={style.deleteIconStyle} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                : <View style={style.bgColor}>
                    <View style={style.imageView}>
                        <Image style={style.noBookingYetIcon} source={require('../../assets/noBookingYetIcon.jpeg')} />
                        <Text style={style.noBookingsYetText}>{message}</Text>
                    </View>
                </View>
        }
    </>
}

export default BookingWrapper


















