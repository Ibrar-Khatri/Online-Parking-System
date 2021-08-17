import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useSelector } from 'react-redux';
import { bookParkingArea } from '../../apis/bookingApis';

import style from './slotTabStyle';
import AddBookingSpinner from '../addBookingSpinner/addBookingSpinner';
import { useNavigation } from '@react-navigation/native';

function SlotTab(props) {

  let navigation = useNavigation();

  let userDetails = useSelector(state => state.userReducer.userDetails);
  let [slot, setSlot] = useState('');
  let [onPressSlot, setOnPressSlot] = useState(false);

  function bookParking() {
    setOnPressSlot(true);
    let details = {
      startTime: props.startTime,
      endTime: props.endTime,
      userId: userDetails.uid,
      slotName: slot,
      nameOfLocation: props.location,
    };
    setOnPressSlot(false);
    bookParkingArea(details)
    .then(res => {
        console.log('Resolve ==> ' + JSON.stringify(res.data));
        navigation.navigate('main-screen',{screen:'myBooking-screen'})
      })
      .catch(err => {
        console.log('Error => ' + err);
      });
  }
  let dateAndTimeFilled =
    (props.date && props.startTime, props.endTime != 'Select Time');
  return (
    <>
      {dateAndTimeFilled ? (
        <>
          <View style={style.slotView}>
            {Array.from({ length: 12 }).map((item, index) => (
              <TouchableOpacity
                style={style.carIconView}
                key={index}
                onPress={() => {
                  setSlot(`Slot ${index + 1}`);
                }}>
                {slot === `Slot ${index + 1}` ? (
                  <>
                    <Image
                      style={style.carIcon}
                      source={require('../../assets/selectedSlotIcon.png')}
                    />
                    <Text style={style.slotTextStyle}>Selected</Text>
                  </>
                ) : (
                  <>
                    <Image
                      style={style.carIcon}
                      source={require('../../assets/slotIcon.png')}
                    />
                    <Text style={style.slotTextStyle}>{`Slot ${index + 1
                      }`}</Text>
                  </>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Button
              disabled={slot === ''}
              style={style.buttonStyle}
              onPress={() => {
                setOnPressSlot(true);
                bookParking();
              }}>
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
