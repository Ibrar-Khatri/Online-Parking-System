import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button, Heading, HStack, Spinner, useToast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { bookParkingArea } from '../../apis/bookingApis';

import style from './slotTabStyle';
import CustomSpinner from '../customSpinner/customSpinner';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client'
import appSetting from '../../../appSetting/appSetting';
import { filterBookings } from '../../lib/helperFunction';
import CustomToast from '../customToast/customToast';

function SlotTab({ area, date, startTime, endTime }) {

  let socket = io(appSetting.severHostedUrl)
  let navigation = useNavigation();
  let dispatch = useDispatch();
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let selectedAreaBookings = useSelector(state => state.bookingReducer.selectedAreaAllBookings);
  let locations = useSelector(state => state.bookingReducer.locations);
  let [slotName, setSlotName] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [bookedSlot, setBookedSlot] = useState([])
  let slots = Array.from({ length: area.numberOfSlots }, () => ({}))

  let toast = useToast()

  function bookParking() {
    setIsLoading(true);
    let details = {
      startTime: startTime,
      endTime: endTime,
      userId: userDetails.uid,
      slotName,
      location: area.location
    };
    console.log(details)
    let isLocationAvailable = locations.some(locat => locat.location === area.location)
    if (isLocationAvailable) {
      bookParkingArea(details)
        .then(res => {
          if (res.data.status) {
            socket.emit('add-new-booking', ({ newBooking: details, userDetails }))
            setIsLoading(false);
            toast.show({
              placement: "top",
              duration: 1500,
              render: () => <CustomToast type='success' description={res.data.message} />
            })
            navigation.navigate('booking', { screen: 'upcoming-booking' })
          } else {
            setIsLoading(false);
            toast.show({
              placement: "top",
              duration: 1500,
              render: () => <CustomToast type='error' description={res.data.message} />
            })
          }
        })
        .catch(err => {
          setIsLoading(false);
          toast.show({
            placement: "top",
            duration: 1500,
            render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
          })
        });
    } else {
      setIsLoading(false);
      toast.show({
        placement: "top",
        duration: 1500,
        render: () => <CustomToast type='info' description='Admin has removed this parking area' />
      })
      setTimeout(() => {
        navigation.navigate('home')
      }, 1500)
    }
  }
  let userBookingDetails = { date, startTime, endTime }
  let dateAndTimeFilled =
    (date && startTime && endTime)

  useEffect(() => {
    if (dateAndTimeFilled) {
      let booked = filterBookings(selectedAreaBookings, userBookingDetails)
      setBookedSlot(booked)
    }
  }, [selectedAreaBookings])
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
          <CustomSpinner
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
