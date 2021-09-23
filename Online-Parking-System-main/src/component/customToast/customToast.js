import React from "react";
import { Image, View, Text } from 'native-base'
import style from "./customToastStyle";


function CustomToast({ type, description }) {
    let image
    if (type === 'success') {
        image = require('../../assets/successIcon.png')
    } else if (type === 'info') {
        image = require('../../assets/infoIcon.png')
    } else if (type === 'error') {
        image = require('../../assets/errorIcon.png')
    }
    return <View style={[style.toastView, style[type]]}>
        <Image source={image} alt='toast Icon' style={style.toastIcon} />
        <Text style={style.toastText}>{description}</Text>
    </View>
}
export default CustomToast