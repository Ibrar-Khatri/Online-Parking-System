import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';
import { Avatar, Image, useToast } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';
import style from './userListStyle'
import { useSelector } from 'react-redux';
import { removeUserFromDb } from '../../../apis/userApis';
import { io } from 'socket.io-client';
import appSetting from '../../../../appSetting/appSetting';
import CustomSpinner from '../../../component/customSpinner/customSpinner';
import CustomToast from '../../../component/customToast/customToast';

export default function AllUser({ navigation }) {
    let socket = io(appSetting.severHostedUrl)
    let allUsersList = useSelector(state => state.userReducer.allUsers);
    let [listData, setListData] = useState()
    let [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    useEffect(() => {
        setListData(allUsersList?.map((item, index) => ({ ...item, key: index })).sort((a, b) => (a.displayName > b.displayName) ? 1 : -1))
    }, [allUsersList])


    const closeItem = (rowMap, data) => {
        if (rowMap[data.index]) {
            rowMap[data.index].closeRow();
        }
    };

    const deleteItem = (rowMap, data) => {
        closeItem(rowMap, data);
        setIsLoading(true)
        let userID = { uid: data.item.uid }
        removeUserFromDb(userID)
            .then(res => {
                setIsLoading(false)
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === data.item.key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                if (res.data.status) {
                    socket.emit('userDeleted', data.item.uid)
                    toast.show({
                        placement: "top",
                        duration: 1500,
                        render: () => <CustomToast type='success' description={res.data.message} />
                    })
                } else {
                    toast.show({
                        placement: "top",
                        duration: 1500,
                        render: () => <CustomToast type='error' description={res.data.message} />
                    })
                }
            })
            .catch(error => {
                setIsLoading(false)
                toast.show({
                    placement: "top",
                    duration: 1500,
                    render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
                })
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
                data={listData}
                // data={allUsers}
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