import { StyleSheet } from 'react-native';
import { backgroundColor, height, margin, marginBottom } from 'styled-system';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
  selectSlotView: {
    marginTop: vh(1),
    height: vh(46),
  },
  contentContainerStyle:{alignItems:'center'},
  carIconView: {
    marginRight: vw(7),
    marginLeft: vw(7),
    marginTop: vw(1),
    alignItems: 'center',

  },
  bookedSlotCarIcon: {
    opacity: 0.5,
    height: vh(7),
    width: vh(7),
  },
  slotNameText: {
    fontSize: vh(2),
  },
  carIcon: {
    height: vw(13),
    width: vw(13),
  },
  loadingSpinner: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' },
  
  buttonStyle: {
    marginTop: vh(1),
    width: vw(40),
    height: vh(6),
    alignSelf: 'center',
    backgroundColor: '#00bfff',
    paddingTop: vh(1)

  },
  buttonText: {
    color: 'white',
    fontSize: vh(2.5),
    display: 'flex',
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
