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

export default function AllUser() {
    let dispatch = useDispatch()
    let socket = io(appSetting.severHostedUrl)
    let allUsersList = useSelector(state => state.userReducer.allUsers);
    let allUsers = allUsersList?.map((item, index) => ({ ...item, key: index }))

    const closeItem = (rowMap, data) => {
        if (rowMap[data.index]) {
            rowMap[data.index].closeRow();
        }
    };

    const deleteItem = (rowMap, data) => {
        closeItem(rowMap, data);
        let userID = { uid: data.item.id }
        console.log(userID)
        removeUserFromDb(userID)
            .then(res => {
                socket.emit('userDeleted', { uid: data.item.id, removedBookingsId: res.data.removedBookingsId })
                // dispatch({ type: 'removeUserFromAllUsers', payload: data.item.id })
            })
            .catch(error => {
                console.log(error)
            })
    };

    const onItemOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => {
        let imageUri = data.item.profileImage ? data.item.profileImage : undefined
        return <View style={style.usersView} id={Math.random()}>
            <Avatar size={vh(6)} source={{ uri: imageUri }} >
                {!imageUri && 'SS'}
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
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onItemOpen}
            />
        </View>
    );
}