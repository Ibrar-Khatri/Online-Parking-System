import React from "react";
import { StyleSheet } from "react-native";
import { marginTop } from "styled-system";
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
    signUpText: {
        fontSize: vh(5),
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: vh(7)
    },
    messageText: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    loginText: {
        fontWeight: 'bold',
    },
    fieldView: {
        height: vh(35)
    },
    fieldInput: {
        width: vw(70),
        height: vh(8),
        alignSelf: 'center',
    },
    invalidInputStyle: {
        color: 'red',
        marginTop:10
    }
});
