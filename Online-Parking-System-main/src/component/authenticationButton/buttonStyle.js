import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as vh,widthPercentageToDP as vw } from '../../responsive/responsive';
export default StyleSheet.create({
    buttonStyle: {
        borderRadius: 100,
        width: vw(30),
        height:vh(6),
        marginBottom: vh(2),
        alignSelf: 'center',
    },
    buttonText:{
        color:'white',
        fontSize:vh(2)
    }
});