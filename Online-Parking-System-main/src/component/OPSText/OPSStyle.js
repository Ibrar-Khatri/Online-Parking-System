import React from 'react';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from '../../responsive/responsive';

const headerHeight = heightPercentageToDP(45);

export default StyleSheet.create({
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
    fontWeight: 'bold',
  },
});
