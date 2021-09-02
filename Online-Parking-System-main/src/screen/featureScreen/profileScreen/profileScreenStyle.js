import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../../responsive/responsive";

export default StyleSheet.create({
    bgView: {
        height: vh(30),
        backgroundColor: '#767886',
        borderBottomLeftRadius: vh(2),
        borderBottomRightRadius: vh(2),
    },
    avatarAndTextStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: vw(5),
        marginTop: vh(4),
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        height: vh(15),
        width: vh(15)
    },
    textStyle: { marginLeft: vw(3) },
    nameStyle: {
        color: 'white',
        fontSize: vh(3)
    },
    emailStyle: {
        color: 'white',
        fontSize: vh(2)
    }
})