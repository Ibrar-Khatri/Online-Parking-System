import { StyleSheet } from "react-native";
import { alignItems, borderRadius, justifyContent, margin } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    bodyStyle: {
        marginTop: vh(2),
    },
    inputFieldIconStyle: {
        height: vh(3),
    },
    inputFieldsStyleView: {
        height: vh(9),
        width: vw(75),
        alignSelf: 'center',
    },
    inputFieldStyle: {
        height: vh(5),
        fontSize: vh(1.8),
    },
    inValidInputTextStyle: {
        fontSize: vh(1.6),
        color: 'red',
        marginTop: 3,
        marginLeft: 10
    },
    buttonStyle: {
        backgroundColor: '#00bfff',
        alignSelf: 'center',
        marginLeft: 10, 
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: vh(1.8),
    },
})