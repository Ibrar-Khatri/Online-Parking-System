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
  imageStyle: { width: vw(7), height: vh(5) },
  locationText: {
    fontSize: vh(3),
    color: 'white',
    paddingLeft: vw(2),
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
