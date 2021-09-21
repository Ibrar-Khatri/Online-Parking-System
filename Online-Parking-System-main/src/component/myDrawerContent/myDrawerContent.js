import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { Avatar, Icon, View } from "native-base";
import style from './myDrawerContentStyle'
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";



function MyDrawerContent(props) {

    let dispatch = useDispatch()
    let navigation = useNavigation()
    let userDetails = useSelector(state => state.userReducer.userDetails)

    let onPressDrawerItem = async (condition) => {
        if (condition == 'profile') {
            navigation.navigate('featureScreen', { initialRouteName: 'user-profile', title: 'User Profile' });
        }
        else if (condition == 'logout') {
            try {
                await AsyncStorage.removeItem('userID')
                dispatch({ type: 'removeUserDetails' })
                dispatch({ type: 'removeCurrentUserBooking' })
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'authentication-screen' }],
                });
            } catch (e) {
                console.log('Error in sign out', e)
                return
            }
            console.log('signout successfully.')
        }
    }


    return (
        <DrawerContentScrollView {...props}>
            <View style={style.headerView}>
                <Image source={require('../../assets/profileBGImage.png')} style={style.bgImage} />
                {
                    userDetails.profileImage ?
                        <Image source={{ uri: userDetails.profileImage }} style={style.profileIcon} />
                        :
                        <Image source={require('../../assets/profileIcon.png')} style={style.profileIcon} />
                }
                <View style={style.nameAndEmailView}>
                    <Text style={style.textEmail}>{userDetails.displayName}</Text>
                    <Text style={style.textName}>{userDetails.email}</Text>
                </View>
            </View>
            <View style={style.drawerItemView}>
                <DrawerItemList {...props} />
                <View style={style.accountSettingView}>
                    <Text style={style.accountSettingText}>Account Settings</Text>
                </View>
                {
                    userDetails.uid != 'izzQ49T0TDRypHOAFEpBXgy2oqP2' && <DrawerItem
                        label="Update Profile"
                        onPress={() => onPressDrawerItem('profile')}
                        icon={() => <Image resizeMode='contain' source={require('../../assets/editIcon.png')} style={style.iconStyle} />}
                        activeTintColor='#00bfff'
                        inactiveTintColor='black'
                        labelStyle={style.drawerItemLabelStyle}
                    />
                }
                <DrawerItem
                    label="Log Out"
                    onPress={() => onPressDrawerItem('logout')}
                    icon={() => <Image resizeMode='contain' source={require('../../assets/logoutIcon.png')} style={style.iconStyle} />}
                    activeTintColor='#00bfff'
                    inactiveTintColor='black'
                    labelStyle={style.drawerItemLabelStyle}
                />
            </View>
        </DrawerContentScrollView>
    )
}


export default MyDrawerContent