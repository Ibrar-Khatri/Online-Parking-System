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
    signUpText: {
        fontSize: vh(4.5),
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: vh(5)
    },
    messageView: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    messageText: {
        fontSize: vh(1.7)
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: vh(1.7)
    },
    fieldView: {
        height: vh(38),
    },
    fieldInput: {
        width: vw(70),
        height: vh(11),
        alignSelf: 'center',
        
    },
    invalidInputStyle: {
        color: 'red',
        marginTop: vw(1),
        fontSize: vh(1.5)
    }
});
