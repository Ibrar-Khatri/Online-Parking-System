import { StyleSheet } from "react-native";
import { alignItems, borderRadius, justifyContent } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    cardStyle: {
        height: vh(50),
        backgroundColor: 'white',
        width: vw(90),
        marginTop: vh(-10),
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 40,
        paddingTop: vh(9)
    },
    imageStyle: {
        height: vh(4.5),
        width: vw(7),
    },
    linkViewStyle: {
        flexDirection: 'row',
        height: vh(11),
        marginLeft: vw(6),
        alignSelf: 'flex-start',
        alignItems: 'center'
    },
    linkTextStyle: {
        fontSize: vh(3),
        marginLeft: vw(4),
    }
})