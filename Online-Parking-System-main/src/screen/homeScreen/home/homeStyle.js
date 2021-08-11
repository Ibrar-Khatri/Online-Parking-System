import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  // headingDtyle: {
  //   marginTop: vh(3),
  //   marginLeft: vh(3),
  // },
  // textStyle: {
  //   color: 'white',
  //   fontSize: vh(5),
  //   fontWeight: 'bold',
  // },
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: vh(13),
  },
  cardStyle: {
    height: vh(10),
    width: vw(85),
    backgroundColor: '#005b96',
    borderRadius: vw(5),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: vh(3),
    marginBottom: vh(3),
    display: 'flex',
    flexDirection: 'row',
    padding: vh(2.5),
  },
  imageStyle: {width: vw(7), height: vh(4)},
  locationText: {
    fontSize: vh(3),
    color: 'white',
    paddingLeft: vw(2),
  },
});
