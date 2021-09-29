import { Avatar, Button, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native'
import { useSelector } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';
import style from './userListStyle'

function AllUsersLIst({ navigation }) {

    let userDetails = useSelector(state => state.userReducer.userDetails);

    let listViewData = [
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
        {
            name: 'ABC',
            email: 'abc@gmail.com'
        },
    ]

    function removeUser(data, rowMap) {
        let index = rowMap.index
        console.log(index)
        // rowMap[index].closeRow()
    }

    return <>
        <View style={style.usersList}>
            {/* <View style={style.usersView}>
                <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                <View style={style.textView}>
                    <Text style={style.nameText}>ABS XYZ</Text>
                    <Text style={style.emailText}>abc@gmail.com</Text>
                </View>
            </View> */}
            <SwipeListView
                data={listViewData}
                renderItem={(data, rowMap) => (
                    <View style={style.usersView}>
                        <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                        <View style={style.textView}>
                            <Text style={style.nameText}>ABS XYZ</Text>
                            <Text style={style.emailText}>abc@gmail.com</Text>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={style.hiddenItemView}>
                        <Button style={style.buttonStyle} onPress={() => removeUser(rowMap, data)}><Text style={style.buttonText}>Delete</Text></Button>
                    </View>
                )}
                rightOpenValue={vw(-30)}
            />
        </View>
    </>;
}

export default AllUsersLIst;
