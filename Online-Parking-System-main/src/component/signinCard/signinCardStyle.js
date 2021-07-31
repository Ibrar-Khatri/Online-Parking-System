import React from 'react';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';


export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: vh(70),
    width: vw(85),
    marginTop: vh(-25),
    alignSelf: 'center',
  },
  loginText: {
    fontSize: vh(5),
    fontWeight: 'bold',
    marginTop: '17%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  messageText: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  signupText: {
    fontWeight: 'bold',
  },
  fieldView: {
    width: vw(70),
    height: vh(25),
    alignSelf: 'center',
  },
  emailInput: {
    marginTop: vh(2),
    marginTop: vh(2),
  }
});
