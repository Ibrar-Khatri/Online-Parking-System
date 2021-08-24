import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as vh } from '../../responsive/responsive';

export default StyleSheet.create({
  backgroundHeader: {
    backgroundColor: '#00bfff',
    height: vh(45),
    borderBottomLeftRadius: vh(3),
    borderBottomRightRadius: vh(3),
  },
  textStyle: {
    color: 'white',
    fontSize: vh(4),
    alignSelf: 'center',
    marginTop: vh(10),
    fontWeight: 'bold',
  },
});
