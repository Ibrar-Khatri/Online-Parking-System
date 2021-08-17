import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'native-base';
import style from './dateAndTimeTabStyle';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import WarningModal from '../modal/modal';

function DateAndTimeSelector(props) {
  let [showModal, setShowModal] = useState(false);
  let [showDatePicker, setShowDatePicker] = useState(false);
  let [showStartTimePicker, setShowStartTimePicker] = useState(false);
  let [showEndTimePicker, setShowEndTimePicker] = useState(false);
  let [modalMessage, setModalMessage] = useState('');

  function selectedDateAndTime(selected, condition) {
    setModalMessage('');
    if (condition === 'date') {
      setShowDatePicker(false);

      props.setStartTime('Select Time');
      props.setEndTime('Select Time');
      return props.setDate(selected);
    } else if (condition === 'startTime') {
      setShowStartTimePicker(false);
      props.setEndTime('Select Time');
      let selectedDate = new Date(props.date);
      selected.setFullYear(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      );

      if (moment(selected).diff(moment(Date.now()), 'minute') < 0) {
        setModalMessage(
          "Start Time is should not be less than current date's time",
        );
        return setShowModal(true);
      }
      return props.setStartTime(selected);
    } else if (condition === 'endTime') {
      setShowEndTimePicker(false);
      if (props.startTime === 'Select Time') {
        setModalMessage('Please select start time');
        return setShowModal(true);
      }
      let selectedDate = new Date(props.date);
      selected.setFullYear(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      );
      if (moment(selected).diff(moment(props.startTime), 'minute') < 30) {
        setModalMessage(
          "End time should be greater than 30 minutes from start's time",
        );
        return setShowModal(true);
      }
      return props.setEndTime(selected);
    }
  }
  return (
    <>
      <View style={style.slectDateAndTimeView}>
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
            <Text style={style.pickerText}>
              {moment(props.date).format('D MMM YYYY')}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.selectPickerHeading}>Start Time</Text>
          <DateTimePickerModal
            isVisible={showStartTimePicker}
            mode="time"
            date={
              props.startTime == 'Select Time'
                ? new Date()
                : new Date(props.startTime)
            }
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
            date={
              props.endTime == 'Select Time'
                ? new Date()
                : new Date(props.endTime)
            }
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
          <WarningModal
            setShowModal={setShowModal}
            showModal={showModal}
            message={modalMessage}
          />
        )}
        <View>
        <Button
          style={style.buttonStyle}
          onPress={() => props.handleSingleIndexSelect(1)}>
          Next 
        </Button>
        </View>
      </View>
    </>
  );
}

export default DateAndTimeSelector;
