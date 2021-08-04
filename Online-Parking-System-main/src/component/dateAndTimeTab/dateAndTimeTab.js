import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import style from './dateAndTimeTabStyle';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import WarningModal from '../modal/modal';

function DateAndTimeSelector(props) {
    let [showModal, setShowModal] = useState(false);
    let [showDatePicker, setShowDatePicker] = useState(false);
    let [showStartTimePicker, setShowStartTimePicker] = useState(false);
    let [showEndTimePicker, setShowEndTimePicker] = useState(false);
    let [modalMessage, setModalMessage] = useState('')

    function selectedDateAndTime(selected, condition) {
        setModalMessage('')
        if (condition === 'date') {
            props.setStartTime('Select Time')
            props.setEndTime('Select Time')
            props.setDate(selected);
            setShowDatePicker(false);
            return;
        }
        else if (condition === 'startTime') {
            props.setEndTime('Select Time')
            let selectedDate = new Date(props.date)
            selected.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())
            console.log('selected' + selected)
            if (moment(selected).diff(moment(Date.now()), 'second') < 0) {
                setModalMessage("Start Time is should not be less than current date's time");
                setShowStartTimePicker(false);
                setShowModal(true);
                return;
            }
            props.setStartTime(selected);
            console.log(props.startTime + "start")
            return setShowStartTimePicker(false);
        } else if (condition === 'endTime') {
            if (moment(selected).diff(moment(props.startTime), 'minutes') < 0) {
                setModalMessage('End time should be greater than start time')
                setShowEndTimePicker(false);
                setShowModal(true);
                return;
            }
            console.log('end time' + selected)
            props.setEndTime(new Date(selected));
            return setShowEndTimePicker(false);
        }
    }







    return (
        <>
            <View>
                <View>
                    <Text style={style.selectPickerHeading}>Select Date</Text>
                    <DateTimePickerModal
                        isVisible={showDatePicker}
                        mode="date"
                        date={new Date(props.date)}
                        onConfirm={selected => selectedDateAndTime(selected, 'date')}
                        onCancel={() => setShowDatePicker(false)}
                        minimumDate={new Date()}
                    />
                    <TouchableOpacity
                        style={style.pickerStyle}
                        onPress={() => {
                            setShowDatePicker(true);
                        }}>
                        <Text style={style.pickerText}>{moment(props.date).format('D MMM YYYY')}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={style.selectPickerHeading}>Start Time</Text>
                    <DateTimePickerModal
                        isVisible={showStartTimePicker}
                        mode="time"
                        date={new Date(props.startTime)}
                        onConfirm={selected => selectedDateAndTime(selected, 'startTime')}
                        onCancel={() => setShowStartTimePicker(false)}
                    />

                    <TouchableOpacity
                        style={style.pickerStyle}
                        onPress={() => {
                            setShowStartTimePicker(true);
                        }}>
                        <Text style={style.pickerText}>
                            {props.startTime === 'Select Time'
                                ? props.startTime
                                : moment(props.startTime).format('LT')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={style.selectPickerHeading}>End Time</Text>
                    <DateTimePickerModal
                        isVisible={showEndTimePicker}
                        mode="time"
                        date={new Date(props.endTime)}
                        onConfirm={selected => selectedDateAndTime(selected, 'endTime')}
                        onCancel={() => setShowEndTimePicker(false)}
                    />
                    <TouchableOpacity
                        style={style.pickerStyle}
                        onPress={() => {
                            setShowEndTimePicker(true);
                        }}>
                        <Text style={style.pickerText}>
                            {props.endTime === 'Select Time'
                                ? props.endTime
                                : moment(props.endTime).format('LT')}
                        </Text>
                    </TouchableOpacity>
                </View>
                {showModal && (
                    <WarningModal setShowModal={setShowModal} showModal={showModal} message={modalMessage} />
                )}
                <Button variant="outline" style={style.buttonStyle} onPress={() => props.handleSingleIndexSelect(1)} >
                    Next
                </Button>
            </View>
        </>
    );
}

export default DateAndTimeSelector;
