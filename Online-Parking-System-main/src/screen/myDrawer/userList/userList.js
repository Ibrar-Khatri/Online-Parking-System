import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';
import { Avatar, Image } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';
import style from './userListStyle'
import { useDispatch, useSelector } from 'react-redux';
import { removeUserFromDb } from '../../../apis/userApis';
import { io } from 'socket.io-client';
import appSetting from '../../../../appSetting/appSetting';
import CustomSpinner from '../../../component/customSpinner/customSpinner';

export default function AllUser({ navigation }) {
    let socket = io(appSetting.severHostedUrl)
    let allUsersList = useSelector(state => state.userReducer.allUsers);
    let allUsers = allUsersList?.map((item, index) => ({ ...item, key: index }))
    let [isLoading, setIsLoading] = useState(false)

    const closeItem = (rowMap, data) => {
        if (rowMap[data.index]) {
            rowMap[data.index].closeRow();
        }
    };

    const deleteItem = (rowMap, data) => {
        setIsLoading(true)
        closeItem(rowMap, data);
        let userID = { uid: data.item.uid }
        removeUserFromDb(userID)
            .then(res => {
                setIsLoading(false)
                socket.emit('userDeleted', data.item.uid)
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
            })
    };

    const renderItem = data => {
        let imageUri = data.item.profileImage ? data.item.profileImage : undefined
        return <View style={style.usersView} >
            <Avatar size={vh(6)} source={{ uri: imageUri }} >
                <Text style={{ color: 'white' }}>SS</Text>
            </Avatar>
            <View style={style.textView}>
                <Text style={style.nameText}>{data.item.displayName}</Text>
                <Text style={style.emailText}>{data.item.email}</Text>
            </View>
        </View>
    }

    const renderHiddenItem = (data, rowMap) => (
        <View style={style.rowBack}>
            <TouchableOpacity
                style={[style.actionButton, style.closeBtn]}
                onPress={() => closeItem(rowMap, data)}
            >
                <Text style={style.btnText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[style.actionButton, style.deleteBtn]}
                onPress={() => deleteItem(rowMap, data)}
            >
                <Text style={style.btnText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={style.container}>
            <SwipeListView
                data={allUsers}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-150}
                // previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
            <CustomSpinner isLoading={isLoading} />
        </View>
    );
}