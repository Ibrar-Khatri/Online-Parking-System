import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import moment from 'moment';
import SlotTab from '../../../component/slotTab/slotTab';
import DateAndTimeSelector from '../../../component/dateAndTimeTab/dateAndTimeTab';
import style from './bookingScreenStyle';

function AddBookingScreen({route}) {
  let [date, setDate] = useState(moment(new Date()));
  let [startTime, setStartTime] = useState();
  let [endTime, setEndTime] = useState();
  let [location] = useState(route.params.location);

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
          <SlotTab date={date} startTime={startTime} endTime={endTime} location={location}/>
        )}
      </View>
    </>
  );
}

export default AddBookingScreen;
