import React, { useState } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
import SlotTab from '..//slotTab/slotTab'
import DateAndTimeSelector from '../dateAndTimeTab/dateAndTimeTab';
import style from './parkingSLotStyle'

function ParkingSlot() {

    let [selectedIndex, setSelectedIndex] = useState(0);
    // let [showSlotTab, setShowSlotTab] = useState(false)
    let [showDateAndTimeTab, setShowDateAndTimeTab] = useState(true)


    let handleSingleIndexSelect = (index) => {
        if (index === 0) {
            // setShowSlotTab(false)
            setShowDateAndTimeTab(true)
        }
        else {
            // setShowSlotTab(true)
            setShowDateAndTimeTab(false)
        }
        setSelectedIndex(index)
    };


    return <>
        <View style={style.parkingSLotCardStyle}>
            <SegmentedControlTab
                values={['Select Date & Time', 'Select Sot']}
                selectedIndex={selectedIndex}
                tabStyle={style.tabStyle}
                activeTabStyle={style.activeTabStyle}
                onTabPress={handleSingleIndexSelect}
                tabTextStyle={style.tabTextStyle}
            />
            {
                showDateAndTimeTab ? <DateAndTimeSelector /> : <SlotTab />
            }
        </View>
    </>
}

export default ParkingSlot;
