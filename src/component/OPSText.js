import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import InputFieldComponent from '../../src/component/signinCard';

function OPSText() {
  return (
    <>
      <View style={styles.backgroundHeader}>
        <Text style={styles.textStyle}>Online Parking System</Text>
      </View>
    </>
  );
}
export default OPSText;

const styles = StyleSheet.create({
  backgroundHeader: {
    backgroundColor: 'blue',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    marginTop:40,
    fontWeight:'bold'
  },
});
