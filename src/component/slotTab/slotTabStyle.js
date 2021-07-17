import { StyleSheet } from 'react-native'
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from '../../responsive/responsive'


export default StyleSheet.create({
    carParkingIcon: {
        height: vh(13),
        width: vw(25),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    carIcon: {
        height: vh(10), width: vw(20), marginLeft: vh(2), marginRight: vh(2)
    },
    carIconView: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    slotView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: vw(90),
    },
    slotTextStyle: {
        fontSize: vh(2),
        alignSelf: 'center',
        marginTop: vh(-2)
    }


})