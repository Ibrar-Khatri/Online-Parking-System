import { StyleSheet } from 'react-native';
import { background, width } from 'styled-system';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    list: {
        color: '#FFF',
    },
    btnText: {
        color: '#FFF',
        fontSize: vh(1.8),
        fontWeight: 'bold'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'lightcoral',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    closeBtn: {
        backgroundColor: 'blue',
        right: 75,
        height: vh(9)
    },
    deleteBtn: {
        backgroundColor: 'red',
        right: 0,
        height: vh(9)
    },
    usersView: {
        height: vh(9),
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
