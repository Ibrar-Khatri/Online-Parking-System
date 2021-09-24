import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../responsive/responsive';

export default StyleSheet.create({
    slectDateAndTimeView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    selectPickerHeading: {
        fontSize: vh(3.2),
        fontWeight: 'bold',
        display: 'flex',
        alignSelf: 'center',
        marginBottom: vh(1),
        fontFamily: 'DMSerifDisplay-Regular'
    },
    pickerStyle: {
        height: vh(4.5),
        width: vw(35),
        borderWidth: vh(0.2),
        borderRadius: 20,
    },
    pickerText: {
        fontSize: vh(2.5),
        alignSelf: 'center',
        lineHeight: vh(3.5)
    },
    buttonStyle: {
        width: vw(30),
        height: vh(5),
        alignSelf: 'center',
        backgroundColor: '#00bfff',
        paddingTop: vh(1)
    },
    buttonText: {
        color: 'white',
        fontSize: vh(2.5),
        lineHeight: 23
    }
});
