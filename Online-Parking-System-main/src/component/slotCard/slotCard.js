import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import style from './slotCardStyle';

function SlotCard(props) {
  let dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'selectArea', payload: props.location});
          props.navigation.navigate('featureScreen');
        }}>
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
