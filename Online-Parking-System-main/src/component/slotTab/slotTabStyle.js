import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
  carParkingIcon: {
    height: vh(8),
    width: vw(18),
    marginTop: vh(2),
    alignSelf: 'center',
  },
  carIcon: {
    height: vh(7),
    width: vw(15),
    marginLeft: vh(2),
    marginRight: vh(2),
  },
  carIconView: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: vh(1),
    marginBottom: vh(1),
  },
  slotView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginTop: vh(1),
    marginRight: 'auto',
    width: vw(90),
  },
  slotTextStyle: {
    fontSize: vh(2),
    alignSelf: 'center',
    marginTop: vh(0),
  },
  buttonStyle: {
    width: vw(50),
    alignSelf: 'center',
    // marginTop: vh(2),
  },
  messageView: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  messageStyle: {
    alignSelf: 'center',
    fontSize: vh(3),
  },
});
