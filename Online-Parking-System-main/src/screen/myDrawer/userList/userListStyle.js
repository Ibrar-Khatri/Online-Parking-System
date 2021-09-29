import { StyleSheet } from 'react-native';
import { background, width } from 'styled-system';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
    usersView: {
        height: vh(10),
        flexDirection: 'row',
        paddingLeft: vw(4),
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },
    textView: {
        marginLeft: vw(2),
        alignContent: 'center'
    },
    nameText: {
        fontSize: vh(2.2)
    },
    emailText: {
        fontSize: vh(1.8)
    },
    hiddenItemView: {
        width: vw(30),
        maxWidth: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    buttonStyle: {
        height: vh(10),
        width: vw(30),
        maxWidth: '100%',
        backgroundColor: 'red'
    },
    buttonText: {
        fontSize: vh(2.2),
        color: 'white'
    }


});
