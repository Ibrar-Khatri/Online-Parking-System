import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    bgView: {
        height: vh(30),
        backgroundColor: '#767886',
        borderBottomLeftRadius: vh(2),
        borderBottomRightRadius: vh(2),
    },
    avatarStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: vw(3),
        marginTop: vh(4)
    },
    textStyle: { marginLeft: vw(3), marginTop: vh(1.8) },
    nameStyle: {
        color: 'white'
    },
    emailStyle: {
        color: 'white'
    }
})