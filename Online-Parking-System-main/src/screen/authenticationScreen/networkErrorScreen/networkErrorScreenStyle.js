import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as vh,
  widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center'
  },
  imageStyle: { width: vh(30), height: vh(30), marginTop: vh(10) },
  opsText: {
    fontSize: vh(8),
  },
  textStyle: {
    fontSize: vh(3),
  },
  buttonStyle: {
    width: vw(50),
    height:vh(6),
    marginTop: vh(20),
  },
  buttonText:{
    color:'white',
    fontSize:vh(2.5),
    lineHeight:vh(3)
  }
});
