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
    },
    imageStyle: {
        height: vh(6),
        width: vw(12),
        marginTop: vh(10),
        marginLeft: vw(5),
    },
    linkViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    linkTextStyle: {
        marginTop: vh(11),
        marginLeft: vw(3),

    }




})