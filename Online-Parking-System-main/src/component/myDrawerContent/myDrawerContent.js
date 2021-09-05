import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Image, ImageBackground, Text } from "react-native";
import { View } from "native-base";
import style from './myDrawerContentStyle'
import { useSelector } from "react-redux";



function MyDrawerContent(props) {

    let userDetails = useSelector(state => state.userReducer.userDetails)

    return <>
        <View>
            <View>
                <Image source={require('../../assets/profileBGImage.png')} style={style.bgImage} />
                <Image source={require('../../assets/profileIcon.png')} style={style.profileIcon} />
                <View style={style.nameAndEmailView}>
                    <Text style={style.textEmail}>{userDetails.displayName}</Text>
                    <Text style={style.textName}>{userDetails.email}</Text>
                </View>
            </View>
        </View>

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </>
}


export default MyDrawerContent