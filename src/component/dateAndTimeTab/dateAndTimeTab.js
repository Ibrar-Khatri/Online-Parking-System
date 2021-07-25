import React, { useEffect, useState } from 'react'
import { Button, Platform, Text, TouchableOpacity, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import style from './dateAndTimeTabStyle'
import moment from 'moment'

function DateAndTimeSelector() {

    let [condition, setCondition] = useState()
    let [date, setDate] = useState()
    let [startTime, setStartTime] = useState('')
    let [endTime, setEndTime] = useState('')

    useEffect(() => {
        setDate((moment(new Date()).format('MMM Do YY')))
    }, [])


    function selectedDateAndTime(e, selected) {

        if (condition === 'date') {

            setDate(moment(selected).format('MMM Do YY'))
            return setCondition('')
        }
        else if (condition === 'startTime') {
            setStartTime(moment(selected).format('LT'))
            return setCondition('')

        }
        else if (condition === 'endTime') {
            setEndTime(moment(selected).format('LT'))
            return setCondition('')

        }
    }

    return <>

        <View>
            <View>
                <View>
                    <View>
                        <Text style={style.selectPickerHeading}>Select Date</Text>
                        {
                            Platform.OS === 'ios' ?
                                <RNDateTimePicker mode='date' value={new Date()} onChange={selectedDateAndTime} minimumDate={new Date()} style={style.iosPickerStyle} /> :


                                condition === 'date' ?
                                    <RNDateTimePicker mode='date' value={new Date()} onChange={selectedDateAndTime} minimumDate={new Date()} />
                                    :
                                    (<TouchableOpacity style={style.pickerStyle} onPress={() => setCondition('date')} >
                                        {
                                            <Text style={style.pickerText}>{date}</Text>
                                        }
                                    </TouchableOpacity>)
                        }
                    </View>

                    <View>
                        <Text style={style.selectPickerHeading}>Start Time</Text>
                        {
                            Platform.OS === 'ios' ?
                                <RNDateTimePicker mode='time' value={new Date()} onChange={selectedDateAndTime} minimumDate={new Date()} style={style.iosPickerStyle} /> :

                                condition === 'startTime' ?
                                    <RNDateTimePicker mode='time' value={new Date()} onChange={selectedDateAndTime} />
                                    :
                                    (<TouchableOpacity style={style.pickerStyle} onPress={() => setCondition('startTime')} >
                                        {
                                            <Text style={style.pickerText}>{startTime}</Text>
                                        }
                                    </TouchableOpacity>)
                        }
                    </View>

                    <View>
                        <Text style={style.selectPickerHeading}>End Time</Text>
                        {
                            Platform.OS === 'ios' ?
                                <RNDateTimePicker mode='time' value={new Date()} onChange={selectedDateAndTime} minimumDate={new Date()} style={style.iosPickerStyle} /> :

                                condition === 'endTime' ?
                                    <RNDateTimePicker mode='time' value={new Date()} onChange={selectedDateAndTime} neutralButtonLabel='clear' />
                                    :
                                    (<TouchableOpacity style={style.pickerStyle} onPress={() => setCondition('endTime')} >
                                        {
                                            <Text style={style.pickerText}>{endTime}</Text>
                                        }
                                    </TouchableOpacity>)
                        }
                    </View>

                </View>
            </View>
        </View>
    </>
}


export default DateAndTimeSelector