import { StyleSheet } from 'react-native'
import { height, justifyContent, width } from 'styled-system'
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from '../../responsive/responsive'


export default StyleSheet.create({
    parkingSLotCardStyle: {
        height: vh(60),
        width: vw(90),
        backgroundColor: 'white',
        marginTop: vh(-17),
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: vh(3)
    },

    tabStyle: {
        borderColor: '#00bfff'
    },
    activeTabStyle: {
        backgroundColor: '#00bfff'
    },
    tabTextStyle: {
        color: '#00bfff',
        fontSize: vh(2.2)
    }
})