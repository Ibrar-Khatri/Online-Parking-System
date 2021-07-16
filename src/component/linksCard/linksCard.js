import { View, Text } from "native-base";
import React from "react";
import { Image, } from "react-native";
import style from './linksCardStyle'


function LinksCard() {
    return <>
        <View style={style.cardStyle}>

            <View style={style.linkViewStyle}>
                <Image source={require('../../assets/profile.png')} style={style.imageStyle} />
                <Text fontSize='xl' style={style.linkTextStyle}>Profile</Text>
            </View>
            <View style={style.linkViewStyle}>
                <Image source={require('../../assets/logoutIcon.png')} style={style.imageStyle} />
                <Text fontSize='xl' style={style.linkTextStyle}>Logout</Text>
            </View>

        </View>
    </>
}


export default LinksCard