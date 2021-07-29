import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import style from './OPSStyle';

function OPSText() {
  return (
    <>
      <View style={style.backgroundHeader}>
        <Text style={style.textStyle}>Online Parking System</Text>
      </View>
    </>
  );
}
export default OPSText;
