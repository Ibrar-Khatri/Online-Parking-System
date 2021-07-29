import { StyleSheet } from "react-native";
import { marginTop } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../../responsive/responsive";

export default StyleSheet.create({
    myBookingText: {
        fontSize: vh(4),
        fontWeight: 'bold',
        marginTop: vh(3),
        marginLeft: vw(6)
    }


})