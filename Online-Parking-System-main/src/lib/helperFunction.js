import moment from "moment"


export const filterBookings = (allBookings, userBookingDetails) => {
    console.log(allBookings.length)
    let unavailableSlots = []
    console.log('before foreach')
    allBookings?.forEach(booking => {
        let startTime = moment(new Date(userBookingDetails.startTime)).diff(moment(Date.parse(booking.startTime)), 'second')
        let userStart = moment(new Date(userBookingDetails.endTime)).diff(moment(Date.parse(booking.startTime)), 'second')
        let userEnd = moment(new Date(userBookingDetails.startTime)).diff(moment(Date.parse(booking.endTime)), 'second')

        if (!((startTime > 0 && userEnd >= 0) || (startTime < 0 && userStart <= 0))) {
            unavailableSlots.push(booking.slotName)
        }
    })
    return unavailableSlots
}