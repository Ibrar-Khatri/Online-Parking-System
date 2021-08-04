import { Avatar, View, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import LinksCard from '../linksCard/linksCard'
import style from './uploadImageStyle'

function UploadImage() {

    let userDetails = useSelector(state => state.userReducer.userDetails)

    return <>

        <View>
            <View style={style.bgView}>
                <View style={style.avatarStyle}>
                    <TouchableOpacity >
                        <Avatar
                            size="xl"
                            source={require('../../assets/profileIcon.png')} />
                    </TouchableOpacity>
                    <View style={style.textStyle}>
                        <Text fontSize='2xl' underline style={style.nameStyle}  >{userDetails.displayName}</Text>
                        <Text style={style.emailStyle}>{userDetails.email}</Text>
                    </View>
                </View>
            </View>
            <LinksCard />
        </View>

    </>
}


export default UploadImage