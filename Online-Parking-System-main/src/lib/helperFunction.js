import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"
import SplashScreen from "react-native-splash-screen"
import { useDispatch } from "react-redux"
import { getUserDetailsById } from "../apis/userApis"





export const filterBookings = (selectedAreaBookings, userBookingDetails) => {
    let unavailableSlots = []
    selectedAreaBookings?.forEach(booking => {
        let startTime = moment(new Date(userBookingDetails.startTime)).diff(moment(Date.parse(booking.startTime)), 'second')
        let userStart = moment(new Date(userBookingDetails.endTime)).diff(moment(Date.parse(booking.startTime)), 'second')
        let userEnd = moment(new Date(userBookingDetails.startTime)).diff(moment(Date.parse(booking.endTime)), 'second')

        if (!((startTime > 0 && userEnd >= 0) || (startTime < 0 && userStart <= 0))) {
            unavailableSlots.push(booking.slotName)
        }
    })
    return unavailableSlots
}


export const isAdmin = (userDetails) => {
    return userDetails.uid === 'izzQ49T0TDRypHOAFEpBXgy2oqP2'
}
