import { StyleSheet } from 'react-native'
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from '../../responsive/responsive'

export default StyleSheet.create({
    headerView: {
        height: vh(30),
    },
    bgImage: {
        marginTop: -4,
        height: vh(30),
        maxWidth: 500,
        width: vw(77),
    },
    profileIcon: {
        width: vh(13),
        height: vh(13),
        marginTop: vh(-23),
        marginLeft: vw(5)
    },
    nameAndEmailView: {
        marginLeft: vw(5),
    },
    textEmail: {
        fontSize: vh(4),
        fontWeight: 'bold',
        color: 'white',
        lineHeight: vh(4),
    },
    textName: {
        fontSize: vh(3),
        fontWeight: '600',
        color: 'white',
        lineHeight: vh(3),
    },
    drawerItemView: {
        marginTop: vh(3),
    },
    accountSettingView: {
        marginTop: vh(7),
        marginBottom: vh(2),
        borderTopColor: 'grey',
        borderTopWidth: 2,
        maxWidth: 480,
        width: vw(70),
        alignSelf:'center'
    },
    accountSettingText: {
        marginTop: vh(1.5),
        marginLeft:vh(1),
        fontSize: vh(2),
        fontWeight:'bold',
        color:'grey'
    },
    logoutIconStyle: {
        height: vh(3.5),
        width: vh(3.5),
        marginRight:vw(-2.5)
    },
    drawerItemLabelStyle: {
        fontSize: vh(2),
        fontWeight:'bold',
    },
    


})