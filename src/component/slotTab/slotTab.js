import React, { useEffect, useState } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import style from './slotTabStyle'


function SlotTab(props) {
    let [dateAndTimeFilled, setDateAndTimeFilled] = useState(false)

    useEffect(() => {
        if (props.date && props.startTime != 'Select Time' && props.endTime != 'Select Time') {
            console.log('Filled ')
            return setDateAndTimeFilled(true)
        }
        return console.log('Empty ')
    }, [])


    return <>

        {
            dateAndTimeFilled ? <>
                <Image style={style.carParkingIcon} source={require('../../assets/carParkingIcon.png')} />
                <View style={style.slotView}>
                    {Array.from({ length: 12 }).map((item, index) => (
                        <TouchableOpacity style={style.carIconView} key={index} >
                            <Image style={style.carIcon} source={require('../../assets/carIcon2.png')} />
                            <Text style={style.slotTextStyle}>{`Slot ${index + 1}`}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </> : (<View style={style.messageView}>
                <Text style={style.messageStyle}>Please select date and time</Text>
            </View>)
        }


        {/* <Image style={style.carParkingIcon} source={require('../../assets/carParkingIcon.png')} />
        <View style={style.slotView}>
            {Array.from({ length: 12 }).map((item, index) => (
                <TouchableOpacity style={style.carIconView} key={index} >
                    <Image style={style.carIcon} source={require('../../assets/carIcon2.png')} />
                    <Text style={style.slotTextStyle}>{`Slot ${index + 1}`}</Text>
                </TouchableOpacity>
            ))}
        </View> */}

    </>
}


export default SlotTab