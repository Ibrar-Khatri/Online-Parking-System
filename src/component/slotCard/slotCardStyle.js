import {StyleSheet} from 'react-native';
import {width} from 'styled-system';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
  cardStyle: {
    height: vh(10),
    width: vw(85),
    backgroundColor: '#005b96',
    borderRadius: vw(5),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: vh(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: vh(2.5),
  },
  imageStyle: {width: vw(7), height: vh(4)},
  locationText: {
    fontSize: vh(3),
    color: 'white',
    paddingLeft: vw(2),
  },
});
