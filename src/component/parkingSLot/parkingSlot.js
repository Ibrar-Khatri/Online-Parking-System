import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import SlotTab from '..//slotTab/slotTab'
import style from './parkingSLotStyle'

function ParkingSlot() {

    return <>
        <View style={style.parkingSLotCardStyle}>
            <View style={style.tabStyle}>
                <TouchableOpacity style={style.tabView} underlayColor={'gray'} >
                    <Text style={style.tabText}>Date and time </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.tabView}>
                    <Text style={style.tabText}>Select Slot </Text>
                </TouchableOpacity>
            </View>


            {/* <SlotTab /> */}

        </View>
    </>
}

export default ParkingSlot;
