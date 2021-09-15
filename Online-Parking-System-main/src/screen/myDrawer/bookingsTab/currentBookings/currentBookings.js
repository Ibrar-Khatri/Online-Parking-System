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
        let pastBookings = AllBookings.filter(bking => moment(new Date(bking.startTime)).diff(moment(Date.now()), 'second') > 0)
        setBookings(pastBookings)
    }, [])
    return <>
        <BookingWrapper bookings={bookings} title='Current Booking' />
    </>
}

export default CurrentBookings


















