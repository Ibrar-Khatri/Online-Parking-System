import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import style from './dateAndTimeTabStyle';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import WarningModal from '../modal/modal';

function DateAndTimeSelector(props) {
    // let [date, setDate] = useState(moment(new Date()).format('D MMM YYYY'));
    // let [startTime, setStartTime] = useState('Select Time');
    // let [endTime, setEndTime] = useState('Select Time');
    let [showModal, setShowModal] = useState(false);
    let [showDatePicker, setShowDatePicker] = useState(false);
    let [showStartTimePicker, setShowStartTimePicker] = useState(false);
    let [showEndTimePicker, setShowEndTimePicker] = useState(false);

    function selectedDateAndTime(selected, condition) {
        console.log('condition ' + condition);
        if (condition === 'date') {
            props.setDate(moment(selected).format('D MMM YYYY'));
            setShowDatePicker(false);
            return;
        } else if (condition === 'startTime') {
            props.setStartTime(selected);
            return setShowStartTimePicker(false);
        } else if (condition === 'endTime') {
            if (moment(selected).diff(moment(props.startTime), 'minutes') < 0) {
                console.log(
                    'Time is ===> ' + moment(selected).diff(moment(props.startTime), 'minutes'),
                );
                setShowEndTimePicker(false);
                setShowModal(true);
                return;
            }
            props.setEndTime(selected);
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
                        // value={props.date}
                        onConfirm={selected => selectedDateAndTime(selected, 'date')}
                        onCancel={() => setShowDatePicker(false)}
                        minimumDate={new Date()}
                    />
                    <TouchableOpacity
                        style={style.pickerStyle}
                        onPress={() => {
                            setShowDatePicker(true);
                        }}>
                        <Text style={style.pickerText}>{props.date}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={style.selectPickerHeading}>Start Time</Text>
                    <DateTimePickerModal
                        isVisible={showStartTimePicker}
                        mode="time"
                        value={props.startTime}
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
                        value={props.endTime}
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
                    <WarningModal setShowModal={setShowModal} showModal={showModal} />
                )}
                <Button variant="outline" style={style.buttonStyle} onPress={() => props.handleSingleIndexSelect(1)} >
                    Next
                </Button>
            </View>
        </>
    );
}

export default DateAndTimeSelector;
