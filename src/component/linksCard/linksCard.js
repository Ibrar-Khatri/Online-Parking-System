import { View, Text } from "native-base";
import React from "react";
import { Image, TouchableOpacity, } from "react-native";
import style from './linksCardStyle'


function LinksCard() {
    return <>
        <View style={style.cardStyle}>
            <TouchableOpacity>
                <View style={style.linkViewStyle}>
                    <Image source={require('../../assets/profile.png')} style={style.imageStyle} />
                    <Text fontSize='xl' style={style.linkTextStyle}>Profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.linkViewStyle}>
                    <Image source={require('../../assets/logoutIcon.png')} style={style.imageStyle} />
                    <Text fontSize='xl' style={style.linkTextStyle}>Logout</Text>
                </View>
            </TouchableOpacity>

        </View>
    </>
}


export default LinksCard