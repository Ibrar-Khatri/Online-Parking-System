import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {width: 300, height: 300, alignSelf: 'center', marginTop: vh(10)},
  opsText: {
    fontSize: vh(8),
    textAlign: 'center',
  },
  textStyle: {
    fontSize: vh(3),
    textAlign: 'center',
  },
  buttonStyle: {
    width: vw(50),
    marginTop: vh(10),
    alignSelf: 'center',
  },
});
