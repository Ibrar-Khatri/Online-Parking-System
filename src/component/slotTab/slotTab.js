import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import style from './slotTabStyle'


function SlotTab() {
    return <>
        <Image style={style.carParkingIcon} source={require('../../assets/carParkingIcon.png')} />
        <View style={style.slotView}>
            {Array.from({ length: 12 }).map((item, index) => (
                <TouchableOpacity style={style.carIconView} ke={index} >
                    <Image style={style.carIcon} source={require('../../assets/carIcon2.png')} />
                    <Text style={style.slotTextStyle}>{`Slot ${index + 1}`}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </>
}


export default SlotTab