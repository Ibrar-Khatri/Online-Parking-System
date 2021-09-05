import { StyleSheet } from 'react-native'
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from '../../responsive/responsive'

export default StyleSheet.create({
    profileView: {
    },
    bgImage: {
        height: vh(30),
        maxWidth: 500,
        width: vw(77),
    },
    profileIcon: {
        width: vh(13),
        height: vh(13),
        marginTop:vh(-25),
        marginLeft:vw(5)
    },
    nameAndEmailView:{
        marginLeft:vw(5),
        // marginTop:vh(1)
    },
    textEmail:{
        fontSize:vh(4),
        fontWeight:'bold',
        color:'white'
    },
    textName:{
        fontSize:vh(3),
        fontWeight:'600',
        color:'white'
    }


})