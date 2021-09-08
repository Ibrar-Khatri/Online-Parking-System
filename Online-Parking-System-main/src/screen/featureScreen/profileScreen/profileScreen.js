import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Avatar, ScrollView } from 'native-base'
import { LinearGradient } from 'react-native-linear-gradient'
import { Header } from 'react-native/Libraries/parkingAppScreen';
import { useSelector } from 'react-redux'
import ProfileScreenCard from '../../../component/profileScreenCard/profileScreenCard'
import style from './profileScreenStyle'


function UserProfileScreen({ route, navigation }) {
    let userDetails = useSelector(state => state.userReducer.userDetails)
    useEffect(() => {
        navigation.setOptions({ title: 'User Profile' })
    })
    return <>
        <ScrollView>
            <View style={style.bgView}>
                <View style={style.avatarAndTextStyle}>
                    <Avatar
                        style={style.avatar}
                        source={require('../../../assets/profileIcon.png')} />
                    <View style={style.textStyle}>
                        <Text underline style={style.nameStyle}  >{userDetails.displayName}</Text>
                        <Text style={style.emailStyle}>{userDetails.email}</Text>
                    </View>
                </View>
            </View>
            <ProfileScreenCard />
        </ScrollView>

    </>;
}

export default UserProfileScreen;
