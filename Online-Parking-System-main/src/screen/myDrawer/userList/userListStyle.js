import { StyleSheet } from 'react-native';
import { width } from 'styled-system';
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

});
