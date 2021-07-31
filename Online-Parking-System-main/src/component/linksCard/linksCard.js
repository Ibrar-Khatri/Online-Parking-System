import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "native-base";
import { Image, TouchableOpacity, } from "react-native";
import style from './linksCardStyle'
import { useNavigation } from "@react-navigation/native";


function LinksCard() {

    let navigation = useNavigation()


    let signOut = async () => {
        try {
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


    return <>
        <View style={style.cardStyle}>
            <TouchableOpacity>
                <View style={style.linkViewStyle}>
                    <Image source={require('../../assets/profile.png')} style={style.imageStyle} />
                    <Text fontSize='xl' style={style.linkTextStyle}>Profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOut}>
                <View style={style.linkViewStyle}>
                    <Image source={require('../../assets/logoutIcon.png')} style={style.imageStyle} />
                    <Text fontSize='xl' style={style.linkTextStyle}>Logout</Text>
                </View>
            </TouchableOpacity>

        </View>
    </>
}


export default LinksCard