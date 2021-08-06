import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector} from 'react-redux';
import {bookParkingArea} from '../../apis/user';

import style from './slotTabStyle';
import AddBookingSpinner from '../addBookingSpinner/addBookingSpinner';

function SlotTab(props) {
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let selectedArea = useSelector(state => state.bookingReducer.selectedArea);

  let [dateAndTimeFilled, setDateAndTimeFilled] = useState(false);
  let [slot, setSlot] = useState('');
  let [onPressSlot, setOnPressSlot] = useState(false);

  function bookParking(slot) {
    let details = {
      startTime: props.startTime,
      endTime: props.endTime,
      userId: userDetails.uid,
      slotName: slot,
      nameOfLocation: selectedArea,
    };
    bookParkingArea(details)
      .then(res => {
        console.log('Resolve ==> ' + JSON.stringify(res.data));
      })
      .catch(err => {
        console.log('Error => ' + err);
      });
  }

  useEffect(() => {
    if ((props.date && props.startTime, props.endTime != 'Select Time')) {
      return setDateAndTimeFilled(true);
    }
  }, []);

  return (
    <>
      {dateAndTimeFilled ? (
        <>
          <Image
            style={style.carParkingIcon}
            source={require('../../assets/carParkingIcon.png')}
          />
          <View style={style.slotView}>
            {Array.from({length: 12}).map((item, index) => (
              <TouchableOpacity
                style={style.carIconView}
                key={index}
                onPress={() => {
                  setOnPressSlot(true);
                  setSlot(`Slot ${index + 1}`);
                  bookParking();
                }}>
                {slot === `Slot ${index + 1}` ? (
                  <>
                    <Image
                      style={style.carIcon}
                      source={require('../../assets/carIcon2.png')}
                    />
                    <Text style={style.slotTextStyle}>Selected</Text>
                  </>
                ) : (
                  <>
                    <Image
                      style={style.carIcon}
                      source={require('../../assets/carIcon2.png')}
                    />
                    <Text style={style.slotTextStyle}>{`Slot ${
                      index + 1
                    }`}</Text>
                  </>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Button
              style={style.buttonStyle}
              onPress={() => setOnPressSlot(true)}>
              Add Booking
            </Button>
          </View>
          <AddBookingSpinner
            onPressSlot={onPressSlot}
            setOnPressSlot={setOnPressSlot}
          />
        </>
      ) : (
        <View style={style.messageView}>
          <Text style={style.messageStyle}>Please select date and time</Text>
        </View>
      )}
    </>
  );
}

export default SlotTab;
