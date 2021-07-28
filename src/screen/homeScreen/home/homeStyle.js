import { StyleSheet } from 'react-native';
import { heightPercentageToDP as vh } from '../../../responsive/responsive';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  headingDtyle: {
    marginTop: vh(3),
    marginLeft: vh(3),
  },
  textStyle: {
    color: 'white',
    fontSize: vh(5),
    fontWeight: 'bold',
  },
  viewStyle: {
    display: 'flex',
    marginTop: vh(10)
  }
});
