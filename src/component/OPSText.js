import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import InputFieldComponent from '../../src/component/signinCard';
import { heightPercentageToDP } from '../responsive/responsive';


const headerHeight = heightPercentageToDP(45)

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
    height: headerHeight,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: '18%',
    fontWeight: 'bold'
  },
});
