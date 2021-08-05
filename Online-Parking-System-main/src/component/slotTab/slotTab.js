import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {bookParkingArea} from '../../apis/user';

import style from './slotTabStyle';

function SlotTab(props) {
  let userDetails = useSelector(state => state.userReducer.userDetails);
  let selectedArea = useSelector(state => state.bookingReducer.selectedArea);

  let [dateAndTimeFilled, setDateAndTimeFilled] = useState(false);
  useEffect(() => {
    if ((props.date && props.startTime, props.endTime != 'Select Time')) {
      return setDateAndTimeFilled(true);
    }
    return console.log('Empty ');
  }, []);

  function bookParking(slot) {
    let details = {
      startTime: props.startTime,
      endTime: props.endTime,
      userId: userDetails.uid,
      slotName: slot,
      nameOfLocation: selectedArea,
    };
    console.log(details);
    bookParkingArea(details)
      .then(res => {
        console.log('Resolve ==> ' + res);
      })
      .catch(err => {
        console.log('Error => ' + err);
      });
  }

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
                onPress={() => bookParking(`Slot ${index + 1}`)}>
                <Image
                  style={style.carIcon}
                  source={require('../../assets/carIcon2.png')}
                />
                <Text style={style.slotTextStyle}>{`Slot ${index + 1}`}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
