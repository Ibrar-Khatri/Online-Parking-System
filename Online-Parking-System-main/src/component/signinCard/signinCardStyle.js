import React from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive";


export default StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: vh(70),
        width: vw(85),
        marginTop: vh(-25),
        alignSelf: 'center',
    },
    loginText: {
        fontSize: vh(4.5),
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: vh(5)
    },
    fieldInput: {
        width: vw(70),
        height: vh(12),
        alignSelf: 'center',
    },
    fieldView: {
        height: vh(35)
    },
    invalidInputStyle: {
        color: 'red',
        marginTop: vw(1),
        fontSize: vh(1.5)
    },
    messageView: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    signupText: {
        fontWeight: 'bold',
        fontSize: vh(1.7)
    },
    messageText: {
        fontSize: vh(1.7)
    },
});
