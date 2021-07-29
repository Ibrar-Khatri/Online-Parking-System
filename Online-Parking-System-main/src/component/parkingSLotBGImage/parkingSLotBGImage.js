import { func } from 'joi'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native';
import style from './parkingSLotBGImageStyle'


function BookingScreenBGImage() {
    return <>
        <View style={style.imageView}>
            <Image resizeMode='cover' source={require('../../assets/parkkingImage.jpeg')} style={style.imageStyle} />
        </View>
    </>
}

export default BookingScreenBGImage;