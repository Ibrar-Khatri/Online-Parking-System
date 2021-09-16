import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import style from './currentBookingsStyle'
import BookingWrapper from '../../../../component/bookingWrapper/bookingWrapper';



function CurrentBookings() {
    let AllBookings = useSelector(state => state.bookingReducer.userBookings)
    let [bookings, setBookings] = useState('')

    useEffect(() => {
        let pastBookings = AllBookings?.filter(bking => moment(new Date()).isBetween(new Date(bking.startTime), new Date(bking.endTime)))
        setBookings(pastBookings)
    }, [AllBookings])
    return <>
        <BookingWrapper bookings={bookings} title='Current Booking' message='No Current Bookings' />
    </>
}

export default CurrentBookings


















