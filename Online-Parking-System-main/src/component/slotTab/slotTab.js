import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { bookParkingArea, getAvailableSlots } from '../../apis/bookingApis';

import style from './slotTabStyle';
import AddBookingSpinner from '../addBookingSpinner/addBookingSpinner';
import { useNavigation } from '@react-navigation/native';

function SlotTab({ location, date, startTime, endTime }) {

  let navigation = useNavigation();
  let dispatch = useDispatch()
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let [slot, setSlot] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [bookedSlot, setBookedSlot] = useState([])



  useEffect(() => {
    getAvailableSlots({ startTime, endTime, location })
      .then((res) => {
        if (res.data.status) {
          setBookedSlot(res.data.bookedSlot)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  function bookParking() {
    setIsLoading(true);
    let details = {
      startTime: startTime,
      endTime: endTime,
      userId: userDetails.uid,
      slotName: slot,
      location,
    };
    console.log(details)

    bookParkingArea(details)
      .then(res => {
        dispatch({ type: 'addNewBooking', payload: details })
        setIsLoading(false);
        navigation.navigate('main-screen', { screen: 'myBooking-screen' })
      })
      .catch(err => {
        setIsLoading(false);
      });
  }
  let dateAndTimeFilled =
    (date && startTime, endTime != 'Select Time');
  return (
    <>
      {dateAndTimeFilled ? (
        <>
          <View style={style.slotView}>
            {Array.from({ length: 12 }).map((item, index) => {
              let booked = bookedSlot.some((it) => it === `Slot ${index + 1}`)
              console.log(booked)
              return (
                <TouchableOpacity
                  disabled={booked}
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
              )
            })}
          </View>
          <View>
            <Button
              disabled={!slot}
              style={style.buttonStyle}
              onPress={() => bookParking()}>
              Add Booking
            </Button>
          </View>
          <AddBookingSpinner
            isLoading={isLoading}
            setIsLoading={setIsLoading}
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
