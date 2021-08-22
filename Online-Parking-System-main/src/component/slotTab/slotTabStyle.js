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
    width: vw(15),
    marginLeft: vh(2),
    marginRight: vh(2),
  },
  bookedSlotCarIcon: {
    opacity: 0.5,
    height: vh(7),
    width: vw(15),
    marginLeft: vh(2),
    marginRight: vh(2),
  },
  loadingSpinner: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' },
  carIconView: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: vh(1),
    marginBottom: vh(1),
  },
  selectSlotView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginTop: vh(1),
    marginRight: 'auto',
    width: vw(90),
  },
  slotNameText: {
    fontSize: vh(2),
    alignSelf: 'center',
    marginTop: vh(0),
  },
  buttonStyle: {
    width: vw(50),
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
    width: vw(30),
    height: vh(15),
    alignSelf:'center',
    marginBottom:vh(3)
  }
});
