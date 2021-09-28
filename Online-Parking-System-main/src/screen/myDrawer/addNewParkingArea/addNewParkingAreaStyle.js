import { StyleSheet } from 'react-native';
import { alignItems, fontFamily, height, justifyContent, right } from 'styled-system';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    titleView: {
        height: vh(7),
        justifyContent: 'center',
    },
    titleText: {
        fontSize: vh(3.5),
        color: 'white',
        marginLeft: vw(6),
        fontFamily: 'AbrilFatface-Regular',
    },
    cardStyle: {
        height: vh(8),
        width: vw(93),
        backgroundColor: 'white',
        borderRadius: vw(5),
        alignSelf: 'center',
        marginBottom: vh(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: vh(2),
        paddingRight: vh(2),
    },
    deleteIcon: {
        height: vh(3.5),
        width: vh(3.5),
    },
    deleteIconView: {
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    locationAndSlotTextView: {
        alignSelf: 'center',
    },
    locationText: {
        fontSize: vh(2.2),
        paddingLeft: vw(2),
    },
    slotsText: {
        fontSize: vh(2),
        color: 'black',
        paddingLeft: vw(3),
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createLocationIconView: {
        width: vw(19),
        alignSelf: 'flex-end',
        marginRight: vw(7),
        marginBottom: vh(10),
        position: 'absolute',
        right: '-1%',
        top: '85%',

    },
    createLocationIcon: {
        height: vh(8),
    }
});
