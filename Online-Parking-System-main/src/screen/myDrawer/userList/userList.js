import { Avatar, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';
import style from './userListStyle'

function AllUsersLIst({ navigation }) {

    let userDetails = useSelector(state => state.userReducer.userDetails);

    return <>
        <View style={style.usersList}>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
            <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View>
        </View>
    </>;
}

export default AllUsersLIst;
