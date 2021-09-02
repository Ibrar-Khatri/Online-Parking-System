import React from 'react'
import style from './menuIconListStyle'
import { Image, Text, TouchableOpacity } from 'react-native';
import { Menu, Pressable } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";



function MenuIconList() {

    let navigation = useNavigation()
    let dispatch = useDispatch()

    let onPressListItem = async (condition) => {
        if (condition == 'profile') {
            navigation.navigate('featureScreen', { screen: 'user-profile', params: { title: 'User Profile' } })
        }
        else if (condition == 'logout') {
            try {
                dispatch({ type: 'removeCurrentUserBooking' })
                dispatch({ type: 'removeUserDetails' })
                await AsyncStorage.removeItem('userID')
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


    return <Menu
        on
        style={style.menuView}
        closeOnSelect={false}
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        trigger={(triggerProps) => {
            return (
                <Pressable {...triggerProps}>
                    <Image source={require('../../assets/menuIcon.png')} style={style.menuIcon} />
                </Pressable>
            )
        }}
    >
        <Menu.Item style={style.menuItemView}>
            <TouchableOpacity style={style.menuItem} onPress={() => onPressListItem('profile')}>
                <Image source={require('../../assets/profile.png')} style={style.menuItemIcon} />
                <Text style={style.menuItemText}>Profile</Text>
            </TouchableOpacity>
        </Menu.Item>
        <Menu.Item style={style.menuItemView}>
            <TouchableOpacity style={style.menuItem} onPress={() => onPressListItem('logout')}>
                <Image source={require('../../assets/logoutIcon.png')} style={style.menuItemIcon} />
                <Text style={style.menuItemText}>Logout</Text>
            </TouchableOpacity>
        </Menu.Item>

    </Menu>
}
export default MenuIconList