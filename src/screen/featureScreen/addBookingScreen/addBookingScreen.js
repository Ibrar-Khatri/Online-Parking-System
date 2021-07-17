import React from 'react'


function AddBookingScreen({ route, navigation }) {
    console.log(route)
    navigation.setOptions({ title: route.params.selectedSlot })
    return <></>
}



export default AddBookingScreen