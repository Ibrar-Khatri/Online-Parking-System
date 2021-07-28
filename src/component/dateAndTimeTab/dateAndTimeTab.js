import React, { useEffect, useState } from 'react'
import { Alert, Button, Platform, Text, TouchableOpacity, View } from 'react-native'
// import RNDateTimePicker from '@react-native-community/datetimepicker'
import style from './dateAndTimeTabStyle'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import WarningModal from '../modal/modal';

function DateAndTimeSelector() {

    let [date, setDate] = useState(moment(new Date()).format('D MMM YYYY'))
    let [startTime, setStartTime] = useState('Select Time')
    let [endTime, setEndTime] = useState('Select Time')
    let [showModal, setShowModal] = useState(false)
    let [showDatePicker, setShowDatePicker] = useState(false)
    let [showStartTimePicker, setShowStartTimePicker] = useState(false)
    let [showEndTimePicker, setShowEndTimePicker] = useState(false)


    function selectedDateAndTime(selected, condition) {
        console.log('condition ' + condition)
        if (condition === 'date') {
            setDate(moment(selected).format('D MMM YYYY'))
            setShowDatePicker(false)
            return
        }
        else if (condition === 'startTime') {
            setStartTime(selected)
            return setShowStartTimePicker(false)
        }
        else if (condition === 'endTime') {
            if (moment(selected).diff(moment(startTime), 'minutes') < 0) {
                console.log('Time is ===> ' + moment(selected).diff(moment(startTime), 'minutes'))
                setShowEndTimePicker(false)
                setShowModal(true)
                return
            }
            setEndTime(selected)
            return setShowEndTimePicker(false)
        }

    }

    return <>
        <View style={{ position: 'relative', zIndex: 999, backgroundColor: 'yellow' }}>
            <View>
                <Text style={style.selectPickerHeading}>Select Date</Text>
                <DateTimePickerModal
                    isVisible={showDatePicker}
                    mode="date"
                    value={date}
                    // onChange={() => setCondition('date')}
                    onConfirm={(selected => selectedDateAndTime(selected, 'date'))}
                    onCancel={() => setShowDatePicker(false)}
                    minimumDate={new Date()}
                />
                <TouchableOpacity style={style.pickerStyle} onPress={() => { setShowDatePicker(true) }} >
                    {/* <Text style={style.pickerText}>{moment(date).format('MMM Do YY')}</Text> */}
                    <Text style={style.pickerText}>{date}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={style.selectPickerHeading}>Start Time</Text>
                <DateTimePickerModal
                    isVisible={showStartTimePicker}
                    mode="time"
                    // onChange={() => setCondition('startTime')}
                    onConfirm={(selected => selectedDateAndTime(selected, 'startTime'))}
                    onCancel={() => setShowStartTimePicker(false)}
                />

                <TouchableOpacity style={style.pickerStyle} onPress={() => { setShowStartTimePicker(true) }} >
                    <Text style={style.pickerText}>{startTime === 'Select Time' ? startTime : moment(startTime).format('LT')}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={style.selectPickerHeading}>End Time</Text>
                <DateTimePickerModal
                    isVisible={showEndTimePicker}
                    mode="time"
                    // onChange={() => setCondition('endTime')}
                    onConfirm={(selected => selectedDateAndTime(selected, 'endTime'))}
                    onCancel={() => setShowEndTimePicker(false)}
                />

                <TouchableOpacity style={style.pickerStyle} onPress={() => { setShowEndTimePicker(true) }} >
                    <Text style={style.pickerText}>
                        {endTime === 'Select Time' ? endTime : moment(endTime).format('LT')}
                    </Text>
                </TouchableOpacity>
            </View>
            {
                showModal && <WarningModal setShowModal={setShowModal} showModal={showModal} />
            }

        </View>
    </>
}


export default DateAndTimeSelector