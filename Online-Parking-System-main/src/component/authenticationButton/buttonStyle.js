import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as vh,widthPercentageToDP as vw } from '../../responsive/responsive';
export default StyleSheet.create({
    buttonStyle: {
        borderRadius: 100,
        width: vw(50),
        height:vh(5),
        marginBottom: vh(2),
        alignSelf: 'center',
    },
});