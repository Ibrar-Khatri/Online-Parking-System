import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Button, Heading, HStack, Spinner } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { bookParkingArea, getAvailableSlots } from '../../apis/bookingApis';

import style from './slotTabStyle';
import AddBookingSpinner from '../addBookingSpinner/addBookingSpinner';
import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';

function SlotTab({ location, date, startTime, endTime }) {

  let navigation = useNavigation();
  let dispatch = useDispatch()
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let [showSlots, setShowSlot] = useState(false);
  let [slotName, setSlotName] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  let [bookedSlot, setBookedSlot] = useState([])



  useEffect(() => {
    getAvailableSlots({ startTime, endTime, location })
      .then((res) => {
        if (res.data.status) {

          setBookedSlot(res.data.bookedSlot)
          setShowSlot(true)
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
      slotName,
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
    (date && startTime, endTime != 'Select Time')
  return (
    <>
      {dateAndTimeFilled ? <>

        {showSlots ? <View>
          <View style={style.selectSlotView}>
            {Array.from({ length: 12 }).map((item, index) => {
              let booked = bookedSlot.includes(`Slot ${index + 1}`)
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  disabled={booked}
                  style={style.carIconView}
                  key={index}
                  onPress={() => setSlotName(`Slot ${index + 1}`)}>
                  {slotName === `Slot ${index + 1}` ? (
                    <>
                      <Image
                        style={style.carIcon}
                        source={require('../../assets/selectedSlotIcon.png')}
                      />
                      <Text style={style.slotNameText}>Selected</Text>
                    </>
                  ) : (
                    <>
                      {
                        booked ? (<><Image
                          style={style.bookedSlotCarIcon}
                          source={require('../../assets/selectedSlotIcon.png')}
                        />
                          <Text style={style.slotNameText}>Booked</Text></>) : (<><Image
                            style={style.carIcon}
                            source={require('../../assets/slotIcon.png')}
                          />
                            <Text style={style.slotNameText}>{`Slot ${index + 1}`}</Text></>)
                      }
                    </>
                  )}
                </TouchableOpacity>
              )
            })}
          </View>
          <Button
            disabled={!slotName}
            style={style.buttonStyle}
            onPress={() => bookParking()}>
            Add Booking
          </Button>
          <AddBookingSpinner
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </View> : <HStack space={2} style={style.loadingSpinner}>
          <Heading color="#00bfff">Loading</Heading>
          <Spinner color={'#00bfff'} />
        </HStack>}

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
