import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'native-base'
import { LinearGradient } from 'react-native-linear-gradient'
import { Header } from 'react-native/Libraries/parkingAppScreen';
import { useSelector } from 'react-redux'
import LinksCard from '../../../component/linksCard/linksCard'
import style from './accountStyle'


function AccountScreen() {
  let userDetails = useSelector(state => state.userReducer.userDetails)
  return <>
    <View>
      <View style={style.bgView}>
        <View style={style.avatarAndTextStyle}>
          <TouchableOpacity >
            <Avatar
              style={style.avatar}
              source={require('../../../assets/profileIcon2.png')} />
          </TouchableOpacity>
          <View style={style.textStyle}>
            <Text underline style={style.nameStyle}  >{userDetails.displayName}</Text>
            <Text style={style.emailStyle}>{userDetails.email}</Text>
          </View>
        </View>
      </View>
      <LinksCard />
    </View>
  </>;
}

export default AccountScreen;
