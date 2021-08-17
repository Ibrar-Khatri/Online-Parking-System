import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
    slectDateAndTimeView: {
        flex:1,
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    selectPickerHeading: {
        fontSize: vh(4),
        fontWeight: 'bold',
    },
    pickerStyle: {
        height: vh(5),
        width: vw(50),
        borderWidth: vh(0.2),
        borderRadius: vh(3),
    },
    pickerText: {
        fontSize: vh(3),
        alignSelf: 'center',
    },
    buttonStyle: {
        width: vw(50),
    },
});
