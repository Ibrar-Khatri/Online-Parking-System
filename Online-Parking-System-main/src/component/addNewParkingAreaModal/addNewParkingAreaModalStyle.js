import { StyleSheet } from "react-native";
import { alignItems, borderRadius, justifyContent, margin, marginRight, size } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    bodyStyle: {
        marginTop: vh(2),
    },
    modalHeaderText: {
        fontSize: vh(3),
        marginLeft: vw(2)
    },
    inputFieldsStyleView: {
        height: vh(10),
        width: vw(75),
        alignSelf: 'center',
    },
    inputFieldStyle: {
        // fontSize: vh(1.8),
    },
    inValidInputTextStyle: {
        fontSize: vh(1.6),
        color: 'red',
        marginTop: 3,
        marginLeft: 10
    },
    maodalFooter: {
        marginRight: vw(3.5)
    },
    buttonStyle: {
        backgroundColor: '#00bfff',
        alignSelf: 'flex-end',
        marginRight: vw(2.5),
        marginBottom: vw(1)
    },
    buttonText: {
        color: 'white',
        fontSize: vh(1.7),
    },
})