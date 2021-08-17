import React from 'react'
import { Box } from 'native-base'
import { Text, View } from 'react-native'
import style from './myBookingCardStyle'
import { useSelector } from 'react-redux'
import moment from 'moment'

function MyBookingCard() {
    let bookings = useSelector(state => state.bookingReducer.userBookings)

    return <>
        <View style={style.outSideCard} >
            {
                bookings?.map((bking,ind) => {
                    return (
                        <View style={style.bookingCard} key={ind}>
                            <Text style={style.textStyle}>Location : {bking.nameOfLocation}</Text>
                            <Text style={style.textStyle}>{bking.slotName}</Text>
                            <Text style={style.textStyle}>Time :{moment(bking.startTime).format('LT') + " - " + moment(bking.endTime).format('LT')}</Text>
                            <Text style={style.textStyle}>Date: {moment(bking.data).format("D / M / YYYY")}</Text>
                        </View>
                    )
                })
            }
        </View>
    </>
}




export default MyBookingCard