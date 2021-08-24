import { StyleSheet } from 'react-native';
import { marginBottom } from 'styled-system';
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
    width: vh(7),
    alignSelf: 'center',
  },
  bookedSlotCarIcon: {
    opacity: 0.5,
    height: vh(7),
    width: vh(7),
    alignSelf: 'center',
  },
  loadingSpinner: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' },
  carIconView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginTop: vh(1),
  },
  selectSlotView: {
    marginTop: vh(1),
    width: vw(90),
    height: vh(46)
  },
  slotNameText: {
    fontSize: vh(2),
    alignSelf: 'center',
    marginTop: vh(0),
  },
  buttonStyle: {
    marginTop: vh(1),
    width: vw(50),
    height: vh(6),
    alignSelf: 'center',
  },
  messageView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  messageStyle: {
    fontSize: vh(3),
  },
  dateTimeIcon: {
    width: vh(15),
    height: vh(15),
    alignSelf: 'center',
    marginBottom: vh(3)
  }
});
