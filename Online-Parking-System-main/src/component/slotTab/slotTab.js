import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button, Heading, HStack, Spinner } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { bookParkingArea } from '../../apis/bookingApis';

import style from './slotTabStyle';
import AddBookingSpinner from '../addBookingSpinner/addBookingSpinner';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client'
import appSetting from '../../../appSetting/appSetting';
import { filterBookings } from '../../lib/helperFunction';

function SlotTab({ location, date, startTime, endTime }) {

  let socket = io(appSetting.severHostedUrl)

  let unmounted;
  useEffect(() => {
    unmounted = false;
    socket.on('new-booking-added', (newBooking) => {
      if (!unmounted) {
        dispatch({ type: 'addNewBookingInAllBookings', payload: newBooking })
      }
    })
    return () => {
      unmounted = true;
    }
  }, [])

  let navigation = useNavigation();
  let dispatch = useDispatch();
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let allBookings = useSelector(state => state.bookingReducer.selectedAreaAllBookings);
  let [showSlots, setShowSlot] = useState(false);
  let [slotName, setSlotName] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [bookedSlot, setBookedSlot] = useState([])
  let slots = Array.from({ length: 20 }, () => ({}))

  function bookParking() {
    setIsLoading(true);
    let details = {
      startTime: startTime,
      endTime: endTime,
      userId: userDetails.uid,
      slotName,
      location,
    };

    bookParkingArea(details)
      .then(res => {
        if (res.data.status) {
          socket.emit('add-new-booking', details)
          dispatch({ type: 'addNewBooking', payload: details })
          setIsLoading(false);
          navigation.navigate('drawer', { screen: 'myBooking-screen' })
        } else {
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
      });
  }
  let userBookingDetails = { date, startTime, endTime }
  let dateAndTimeFilled =
    (date && startTime && endTime)

  useEffect(() => {
    if (dateAndTimeFilled) {
      let booked = filterBookings(allBookings, userBookingDetails)
      setBookedSlot(booked)
    }
  }, [allBookings])
  return (
    <>
      {dateAndTimeFilled ? <>
        <View>
          <View >
            <FlatList
              style={style.selectSlotView}
              contentContainerStyle={style.contentContainerStyle}
              data={slots}
              numColumns={3}
              keyExtractor={item => Math.random()}
              renderItem={({ item, index }) => {
                let booked = bookedSlot.includes(`Slot ${index + 1}`)
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    disabled={booked}
                    key={index}
                    onPress={() => setSlotName(`Slot ${index + 1}`)}>
                    {slotName === `Slot ${index + 1}` ? (
                      <View style={style.carIconView}>
                        <Image
                          style={style.carIcon}
                          source={require('../../assets/selectedSlotIcon.png')}
                        />
                        <Text style={style.slotNameText}>Select</Text>
                      </View>
                    ) : (
                      <>
                        {
                          booked ? (<View style={style.carIconView}><Image
                            style={style.bookedSlotCarIcon}
                            source={require('../../assets/selectedSlotIcon.png')}
                          />
                            <Text style={style.slotNameText}>{`Slot ${index + 1}`}</Text></View>) : (<View style={style.carIconView}><Image
                              style={style.carIcon}
                              source={require('../../assets/slotIcon.png')}
                            />
                              <Text style={style.slotNameText}>{`Slot ${index + 1}`}</Text></View>)
                        }
                      </>
                    )}
                  </TouchableOpacity>
                )
              }}

            />
          </View>
          <Button
            disabled={!slotName}
            style={style.buttonStyle}
            onPress={() => bookParking()}>
            <Text style={style.buttonText}>Add Booking</Text>
          </Button>
          <AddBookingSpinner
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </View>
      </> : (
        <View style={style.messageView}>
          <Image
            style={style.dateTimeIcon}
            source={require('../../assets/dateTimeIcon.jpg')}
          />
          <Text style={style.messageStyle}>Please select date and time</Text>
        </View>
      )}
    </>
  );
}

export default SlotTab;
