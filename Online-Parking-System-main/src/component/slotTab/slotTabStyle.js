import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
  carParkingIcon: {
    height: vh(10),
    width: vw(20),
    marginTop: vh(2),
    alignSelf: 'center',
  },
  carIcon: {
    height: vh(9),
    width: vw(18),
    marginLeft: vh(2),
    marginRight: vh(2),
  },
  carIconView: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  slotView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: vw(90),
  },
  slotTextStyle: {
    fontSize: vh(2),
    alignSelf: 'center',
    marginTop: vh(-2),
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
