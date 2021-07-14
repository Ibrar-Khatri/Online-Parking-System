import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './slotCardStyle';

function SlotCard(props) {
  return (
    <>
      <TouchableOpacity>
        <View style={style.cardStyle}>
          <Image
            style={style.imageStyle}
            source={require('../../assets/location.png')}
          />
          <Text style={style.locationText}>{props.location}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default SlotCard;
