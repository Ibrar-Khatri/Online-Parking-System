import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import style from './dateAndTimeTabStyle';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import WarningModal from '../modal/modal';

function DateAndTimeSelector({ date, startTime, endTime, setDate, setStartTime, setEndTime, handleSingleIndexSelect }) {
  let [showModal, setShowModal] = useState(false);
  let [showDatePicker, setShowDatePicker] = useState(false);
  let [showStartTimePicker, setShowStartTimePicker] = useState(false);
  let [showEndTimePicker, setShowEndTimePicker] = useState(false);
  let [modalMessage, setModalMessage] = useState('');

  function selectedDateAndTime(selected, condition) {
    setModalMessage('');
    if (condition === 'date') {
      setShowDatePicker(false);

      setStartTime('');
      setEndTime('');
      return setDate(selected);
    } else if (condition === 'startTime') {
      setShowStartTimePicker(false);
      setEndTime('');
      let selectedDate = new Date(date);
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
      return setStartTime(moment(selected).format('lll'));
    } else if (condition === 'endTime') {
      setShowEndTimePicker(false);
      if (startTime === 'Select Time') {
        setModalMessage('Please select start time');
        return setShowModal(true);
      }
      let selectedDate = new Date(date);
      selected.setFullYear(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      );
      if (moment(selected).diff(moment(startTime), 'minute') < 30) {
        setModalMessage(
          "End time should be greater than 30 minutes from start's time",
        );
        return setShowModal(true);
      }
      return setEndTime(moment(selected).format('lll'));
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
            date={new Date(date)}
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
              {moment(date).format('D MMM YYYY')}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.selectPickerHeading}>Start Time</Text>
          <DateTimePickerModal
            isVisible={showStartTimePicker}
            mode="time"
            date={startTime ? new Date(startTime) : new Date()}
            onConfirm={selected => selectedDateAndTime(selected, 'startTime')}
            onCancel={() => setShowStartTimePicker(false)}
          />

          <TouchableOpacity
            style={style.pickerStyle}
            onPress={() => {
              setShowStartTimePicker(true);
            }}>
            <Text style={style.pickerText}>
              {startTime ? moment(startTime,'lll').format('LT') : 'Select Time'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.selectPickerHeading}>End Time</Text>
          <DateTimePickerModal
            isVisible={showEndTimePicker}
            mode="time"
            date={endTime ? new Date(endTime) : new Date()}
            onConfirm={selected => selectedDateAndTime(selected, 'endTime')}
            onCancel={() => setShowEndTimePicker(false)}
          />
          <TouchableOpacity
            style={style.pickerStyle}
            onPress={() => {
              setShowEndTimePicker(true);
            }}>
            <Text style={style.pickerText}>
              {endTime ? moment(endTime,'lll').format('LT') : 'Select Time'}
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
            onPress={() => handleSingleIndexSelect(1)}>
            Next
          </Button>
        </View>
      </View>
    </>
  );
}

export default DateAndTimeSelector;
