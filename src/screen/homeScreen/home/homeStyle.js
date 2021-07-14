import {StyleSheet} from 'react-native';
import {heightPercentageToDP as vh} from '../../../responsive/responsive';

const fs = vh(5);
const topMargin = vh(3);
const leftMargin = vh(3);

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  headingDtyle: {
    marginTop: topMargin,
    marginLeft: leftMargin,
  },
  textStyle: {
    color: 'white',
    fontSize: fs,
    fontWeight: 'bold',
  },
});
