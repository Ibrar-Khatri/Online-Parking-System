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
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopLeftRadius: vh(3),
        borderTopRightRadius: vh(3),
        overflow: 'hidden',
        // height: vh(7),
        backgroundColor: '#00bfff',
    },
    tabView: {
        flex: 1, borderBottomWidth: vh(0.5)
    },
    tabText: {
        height: vh(5),
        fontWeight: 'bold',
        fontSize: vh(3),
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }

})