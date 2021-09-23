import { StyleSheet } from "react-native";
import { alignItems, borderRadius, justifyContent, margin } from "styled-system";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";

export default StyleSheet.create({
    cardStyle: {
        height: vh(63),
        backgroundColor: 'white',
        width: vw(90),
        marginTop: vh(-10),
        borderRadius: 40,
        alignSelf: 'center',
        paddingTop: vh(10)
    },
    inputFieldIconStyle: {
        height: vh(3),
        maxWidth: vh(3.3),
        marginRight: vw(2),
    },
    inputFieldsStyleView: {
        height: vh(10),
        width: vw(80),
        alignSelf: 'center',
    },
    confrimPasswordFieldStyleView: {
        width: vw(75),
        alignSelf: 'center',
        marginTop: vh(2)
    },
    inputFieldStyle: {
        height: vh(6),
        fontSize: vh(2),
    },
    inValidInputTextStyle: {
        fontSize: vh(1.8),
        color: 'red',
        marginTop: 3,
        marginLeft: 10
    },
    changePasswordTexView: {
        alignItems: 'flex-end',
        marginRight: 20,
    },
    changePasswordText: {
        fontSize: vh(2),
        color: '#00bfff',
    },
    buttonStyle: {
        width: vw(40),
        backgroundColor: '#00bfff',
        marginTop: vh(15),
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: vh(2),
    },
    modalFooter: {
        marginRight: vw(5),
        marginBottom: vh(1.5)
    },
    confrimPasswordModalButton: {
        backgroundColor: '#00bfff',
        alignSelf: 'center',
        marginLeft: 10,
    },
    confrimPasswordModalButtonText: {
        color: 'white',
        fontSize: vh(1.8),
    },
})