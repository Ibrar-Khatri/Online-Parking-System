import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../responsive/responsive';

const cardHeight = heightPercentageToDP(70);
const cardWidth = widthPercentageToDP(85);

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: cardHeight,
    width: cardWidth,
    marginTop: '-50%',
    alignSelf: 'center',
  },

  loginText: {
    fontSize: 30,
    fontWeight: '900',
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
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    height: '40%',
  },
});
