import React, { useEffect, useState } from 'react'
import { Alert, Button, Platform, Text, TouchableOpacity, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import style from './dateAndTimeTabStyle'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import WarningModal from '../modal/modal'

function DateAndTimeSelector() {

    let [condition, setCondition] = useState()
    let [date, setDate] = useState()
    let [startTime, setStartTime] = useState('Select Time')
    let [endTime, setEndTime] = useState('Select Time')
    let [showModal, setShowModal] = useState(true)

    useEffect(() => {
        setDate((moment(new Date()).format('MMM Do YY')))
    }, [])


    function selectedDateAndTime(selected) {

        if (condition === 'date') {
            setDate(moment(selected).format('MMM Do YY'))
            return setCondition('')
        }
        else if (condition === 'startTime') {
            setStartTime(selected)
            return setCondition('')
        }
        else if (condition === 'endTime') {
            console.log('Time is ===> ' + typeof (moment(selected).diff(moment(startTime), 'minutes')))
            if (moment(selected).diff(moment(startTime), 'minutes') < 0) {
                setShowModal(true)
                return setCondition('')
            }
            setEndTime(selected)
            return setCondition('')
        }
        return setCondition('')

    }

    return <>
        <View>
            <View>
                <View>
                    <View>
                        <Text style={style.selectPickerHeading}>Select Date</Text>
                        {
                            condition === 'date' ?
                                <DateTimePickerModal
                                    isVisible={true}
                                    mode="date"
                                    onConfirm={selectedDateAndTime}
                                    onCancel={() => setCondition('')}
                                />
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
                            condition === 'startTime' ?
                                <DateTimePickerModal
                                    isVisible={true}
                                    mode="time"
                                    onConfirm={selectedDateAndTime}
                                    onCancel={() => setCondition('')}
                                /> :
                                (<TouchableOpacity style={style.pickerStyle} onPress={() => setCondition('startTime')} >
                                    <Text style={style.pickerText}>{startTime === 'Select Time' ? startTime : moment(startTime).format('LT')}</Text>
                                </TouchableOpacity>)
                        }
                    </View>

                    <View>
                        <Text style={style.selectPickerHeading}>End Time</Text>
                        {
                            condition === 'endTime' ?
                                <DateTimePickerModal
                                    isVisible={true}
                                    mode="time"
                                    onConfirm={selectedDateAndTime}
                                    onCancel={() => setCondition('')}
                                /> :
                                (<TouchableOpacity style={style.pickerStyle} onPress={() => setCondition('endTime')} >
                                    <Text style={style.pickerText}>{endTime === 'Select Time' ? endTime : moment(endTime).format('LT')}</Text>
                                </TouchableOpacity>)
                        }
                    </View>
                    {
                        showModal ? <WarningModal setShowModal={setShowModal} showModal={showModal} /> : <></>
                    }

                </View>
            </View>
        </View>
    </>
}


export default DateAndTimeSelector