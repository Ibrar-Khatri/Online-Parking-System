import { StyleSheet } from 'react-native'
import { height } from 'styled-system'
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from '../../responsive/responsive'



export default StyleSheet.create({
    imageStyle: {
        height: vh(40),
        borderBottomLeftRadius: vw(10),
        borderBottomRightRadius: vw(10),
        width: vw(100)
    },

})