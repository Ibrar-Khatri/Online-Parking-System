import { StyleSheet } from 'react-native';
import { alignItems, height } from 'styled-system';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  cardStyle: {
    height: vh(10),
    width: vw(85),
    backgroundColor: '#005b96',
    borderRadius: vw(5),
    alignSelf: 'center',
    marginTop: vh(3),
    marginBottom: vh(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: { width: vw(7), height: vh(5), marginLeft: vw(5) },
  locationText: {
    fontSize: vh(2.7),
    color: 'white',
    paddingLeft: vw(4),
    display: 'flex',
    flex: 1,
    alignSelf: 'center'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
