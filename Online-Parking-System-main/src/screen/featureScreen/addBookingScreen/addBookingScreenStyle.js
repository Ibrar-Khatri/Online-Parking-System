import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
  imageStyle: {
    height: vh(40),
    borderBottomLeftRadius: vw(10),
    borderBottomRightRadius: vw(10),
    width: vw(100),
  },
  parkingSLotCardStyle: {
    height: vh(60),
    width: vw(90),
    backgroundColor: 'white',
    marginTop: vh(-17),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: vh(3),
  },

  tabStyle: {
    borderColor: '#00bfff',
  },
  activeTabStyle: {
    backgroundColor: '#00bfff',
  },
  tabTextStyle: {
    color: '#00bfff',
    fontSize: vh(2.4),
  },
});