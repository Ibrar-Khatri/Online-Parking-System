import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import style from './pastBookingsStyle'
import BookingWrapper from '../../../../component/bookingWrapper/bookingWrapper';



function PastBookings() {
    let AllBookings = useSelector(state => state.bookingReducer.userBookings)

    let [bookings, setBookings] = useState('')

    useEffect(() => {
        let pastBookings = AllBookings.filter(bking => moment(new Date(bking.endTime)).diff(moment(Date.now()), 'second') < 0)
        setBookings(pastBookings)
    }, [])
    return <>
        <BookingWrapper bookings={bookings} title='Past Bookings' />
    </>
}

export default PastBookings

















