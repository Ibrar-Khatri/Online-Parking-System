import React from "react"
import { StyleSheet } from "react-native"
import { heightPercentageToDP as vh, widthPercentageToDP as vw } from "../../responsive/responsive"



export default StyleSheet.create({
    modalDisplay: {
        height: vh(20),
        backgroundColor: 'red',
        borderRadius: vh(3),
        position: 'relative',
        zIndex: 999
    },
    titleText: {
        marginLeft: vw(10),
        marginTop: vh(2),
        fontSize: vh(3),
        fontWeight: 'bold'
    },
    messageText: {
        marginLeft: vw(10),
        marginRight: vw(5),
        marginTop: vh(1),
        fontSize: vh(2),

    },
    okButton: {
        fontSize: vh(2),
        marginTop: vh(3),
        alignSelf: 'center'
    },


})