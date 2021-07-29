import { StyleSheet } from "react-native";
import { borderRadius } from "styled-system";
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
        height: vh(6),
        width: vw(10),
    },
    linkViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: vh(8),
        marginTop: vh(4),
        marginLeft: vw(6)

    },
    linkTextStyle: {
        marginTop: vh(1),
        marginLeft: vw(3),
    }




})