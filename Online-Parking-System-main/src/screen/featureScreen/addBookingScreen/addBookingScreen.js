import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import moment from 'moment';
import SlotTab from '../../../component/slotTab/slotTab';
import DateAndTimeSelector from '../../../component/dateAndTimeTab/dateAndTimeTab';
import style from './addBookingScreenStyle';
import { getAllBookings } from '../../../apis/bookingApis';
import { useDispatch } from 'react-redux';

function AddBookingScreen({ route }) {

  let dispatch = useDispatch()
  let [date, setDate] = useState(moment(new Date()));
  let [startTime, setStartTime] = useState();
  let [endTime, setEndTime] = useState();
  let [area] = useState(route.params.area);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let [showDateAndTimeTab, setShowDateAndTimeTab] = useState(true);
  let handleSingleIndexSelect = index => {
    if (index === 0) {
      setShowDateAndTimeTab(true);
    } else {
      setShowDateAndTimeTab(false);
    }
    setSelectedIndex(index);
  };

  useEffect(() => {
    let selectedLocation = { location: area.location }
    getAllBookings(selectedLocation)
      .then((res) => {
        if (res.data.status) {
          let bookings = res.data.bookings
          dispatch({ type: 'userSelectedAreaBooking', payload: bookings })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <View style={style.imageView}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/parkkingImage.jpeg')}
          style={style.imageStyle}
        />
      </View>
      <View style={style.parkingSLotCardStyle}>
        <SegmentedControlTab
          values={['Select Date & Time', 'Select Sot']}
          selectedIndex={selectedIndex}
          tabStyle={style.tabStyle}
          activeTabStyle={style.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
          tabTextStyle={style.tabTextStyle}
        />
        {showDateAndTimeTab ? (
          <DateAndTimeSelector
            handleSingleIndexSelect={handleSingleIndexSelect}
            setDate={setDate}
            date={date}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
        ) : (
          <SlotTab date={date} startTime={startTime} endTime={endTime} area={area} />
        )}
      </View>
    </>
  );
}

export default AddBookingScreen;
