import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SlotTab from '..//slotTab/slotTab';
import DateAndTimeSelector from '../dateAndTimeTab/dateAndTimeTab';
import style from './parkingSLotStyle';

function ParkingSlot() {
  let [date, setDate] = useState(moment(new Date()));
  let [startTime, setStartTime] = useState('Select Time');
  let [endTime, setEndTime] = useState('Select Time');

  let [selectedIndex, setSelectedIndex] = useState(0);
  // let [showSlotTab, setShowSlotTab] = useState(false)
  let [showDateAndTimeTab, setShowDateAndTimeTab] = useState(true);

  let handleSingleIndexSelect = index => {
    if (index === 0) {
      setShowDateAndTimeTab(true);
    } else {
      setShowDateAndTimeTab(false);
    }
    setSelectedIndex(index);
  };

  // useEffect(() => {
  //     handleSingleIndexSelect(1)
  // }, [showDateAndTimeTab])

  return (
    <>
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
          <SlotTab date={date} startTime={startTime} endTime={endTime} />
        )}
      </View>
    </>
  );
}

export default ParkingSlot;
