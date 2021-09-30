// import { Avatar, Button, View } from 'native-base';
// import React from 'react';
// import { Text } from 'react-native'
// import { useSelector } from 'react-redux';
// import { SwipeListView } from 'react-native-swipe-list-view';
import {
    heightPercentageToDP as vh,
    widthPercentageToDP as vw,
} from '../../../responsive/responsive';
// import style from './userListStyle'

// function AllUsersLIst({ navigation }) {

//     let userDetails = useSelector(state => state.userReducer.userDetails);

//     let listViewData = [
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//         {
//             name: 'ABC',
//             email: 'abc@gmail.com'
//         },
//     ]

//     function removeUser(data, rowMap) {
//         let index = rowMap.index
//         console.log(index)
//         rowMap[index].closeRow()
//     }

//     return <>
//         <View style={style.usersList}>
//             <View style={style.usersView}>
//                 <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
//                 <View style={style.textView}>
//                     <Text style={style.nameText}>ABS XYZ</Text>
//                     <Text style={style.emailText}>abc@gmail.com</Text>
//                 </View>
//             </View>
//             <SwipeListView
//                 data={listViewData}
//                 renderItem={(data, rowMap) => {
//                     return <View style={style.usersView} id={Math.random()}>
//                         <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
//                         <View style={style.textView}>
//                             <Text style={style.nameText}>ABS XYZ</Text>
//                             <Text style={style.emailText}>abc@gmail.com</Text>
//                         </View>
//                     </View>
//                 }}
//                 renderHiddenItem={(data, rowMap) => (
//                     <View style={style.hiddenItemView} id={Math.random()}>
//                         <Button style={style.buttonStyle} onPress={() => removeUser(rowMap, data)}><Text style={style.buttonText}>Delete</Text></Button>
//                     </View>
//                 )}
//                 rightOpenValue={vw(-30)}
//             />
//         </View>
//     </>;
// }

// export default AllUsersLIst;













import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
    useWindowDimensions,
    Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SwipeListView } from 'react-native-swipe-list-view';

const COLORS = {
    red: '#cc0000',
    green: '#4cA64c',
    blue: '#4c4cff',
    white: '#fff',
    grey: '#ddd',
};

const hapticFeedbackOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

const VisibleItem = props => {
    const { data, screenWidth, rowKey } = props;

    return (
        <TouchableWithoutFeedback onPress={() => console.log('touched')}>
            <Animated.View
                style={[
                    styles.rowFront,
                    {
                        height: rowAnimatedValues[rowKey].rowHeight,
                        transform: [
                            {
                                translateX: rowAnimatedValues[
                                    rowKey
                                ].rowFrontTranslate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-screenWidth, 0],
                                    extrapolate: 'clamp',
                                }),
                            },
                        ],
                    },
                ]}>
                <Text>{data.item.text}</Text>
                {/* <View style={style.usersView} id={Math.random()}>
                         <Avatar source={{ uri: userDetails.profileImage }} size={vh(6)} style={style.avatarStyle} />
                         <View style={style.textView}>
                             <Text style={style.nameText}>ABS XYZ</Text>
                             <Text style={style.emailText}>abc@gmail.com</Text>
                         </View>
                     </View> */}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const HiddenItemWithActions = props => {
    const {
        leftActionActivated,
        rightActionActivated,
        swipeAnimatedValue,
        onClose,
        onDelete,
        rowKey,
    } = props;

    if (rightActionActivated) {
        Animated.timing(rowAnimatedValues[rowKey].rowBackWidth, {
            toValue: Math.abs(swipeAnimatedValue.__getValue()),
            duration: 250,
            useNativeDriver: false,
        }).start();
    } else {
        Animated.timing(rowAnimatedValues[rowKey].rowBackWidth, {
            toValue: 100,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }

    return (
        <Animated.View
            style={[styles.rowBack, { height: rowAnimatedValues[rowKey].rowHeight }]}>
            {/* {!rightActionActivated && (
                <TouchableWithoutFeedback onPress={onClose}>
                    <Animated.View
                        style={[
                            styles.backBtn,
                            styles.backLeftBtn,
                            {
                                width: 100,
                                transform: [
                                    {
                                        translateX: swipeAnimatedValue.interpolate({
                                            inputRange: [0, 60, 100],
                                            outputRange: [-100, -40, 0],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}>
                        <View style={styles.backBtnInner}>
                            <Icon
                                name="arrow-forward-outline"
                                fill="#fff"
                                width={26}
                                height={26}
                            />
                            <Text style={styles.backBtnText}>Left</Text>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            )} */}
            {!leftActionActivated && (
                <TouchableWithoutFeedback onPress={onClose}>
                    <Animated.View
                        style={[
                            styles.backBtn,
                            styles.backRightBtn,
                            styles.backRightBtnLeft,
                            {
                                width: 100,
                                transform: [
                                    {
                                        translateX: swipeAnimatedValue.interpolate({
                                            inputRange: [-200, -120, 0],
                                            outputRange: [-100, -20, 100],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}>
                        <View style={styles.backBtnInner}>
                            <Image source={require('../../../assets/deleteIcon.png')} />
                            {/* <Icon
                                name="arrow-back-outline"
                                fill="#fff"
                                width={26}
                                height={26}
                            /> */}
                            <Text style={styles.backBtnText}>Close</Text>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            )}
            {!leftActionActivated && (
                <TouchableWithoutFeedback onPress={onDelete}>
                    <Animated.View
                        style={[
                            styles.backBtn,
                            styles.backRightBtn,
                            styles.backRightBtnRight,
                            {
                                width: rowAnimatedValues[rowKey].rowBackWidth,
                                transform: [
                                    {
                                        translateX: swipeAnimatedValue.interpolate({
                                            inputRange: [-200, -120, 0],
                                            outputRange: [0, 40, 100],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}>
                        <View style={styles.backBtnInner}>
                            {/* <Icon name="trash-2-outline" fill="#fff" width={26} height={26} /> */}
                            <Text style={styles.backBtnText}>Delete</Text>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            )}
        </Animated.View>
    );
};

const rowAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowAnimatedValues[`${i}`] = {
            rowHeight: new Animated.Value(60),
            rowFrontTranslate: new Animated.Value(1),
            rowBackWidth: new Animated.Value(100),
        };
    });

const AllUser = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const { width: screenWidth } = useWindowDimensions();

    const [list, setList] = useState(
        [...new Array(20)].map((_, i) => ({
            key: `${i}`,
            text: `This is list item ${i}`,
        })),
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = rowKey => {
        const newData = list.filter(item => item.key !== rowKey);
        setList(newData);
        console.log(rowKey)
    };

    const onDelete = rowKey => {
        Animated.timing(rowAnimatedValues[rowKey].rowFrontTranslate, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
        Animated.timing(rowAnimatedValues[rowKey].rowBackWidth, {
            toValue: screenWidth + 40,
            duration: 200,
            useNativeDriver: false,
        }).start();
        Animated.timing(rowAnimatedValues[rowKey].rowHeight, {
            toValue: 0,
            delay: 200,
            duration: 200,
            useNativeDriver: false,
        }).start(() => deleteRow(rowKey));
    };

    const onRightActionStatusChange = rowKey => {
        console.log('on right action status change');
    };

    const swipeGestureEnded = (rowKey, data) => {
        if (data.translateX < -200) {
            Animated.timing(rowAnimatedValues[rowKey].rowBackWidth, {
                toValue: screenWidth,
                duration: 200,
                useNativeDriver: false,
            }).start();
            Animated.timing(rowAnimatedValues[rowKey].rowHeight, {
                toValue: 0,
                delay: 200,
                duration: 200,
                useNativeDriver: false,
            }).start(() => deleteRow(rowKey));
        }
    };

    const renderItem = (data, rowMap) => {
        return (
            <VisibleItem
                data={data}
                rowKey={data.item.key}
                screenWidth={screenWidth}
            />
        );
    };

    const renderHiddenItem = (data, rowMap) => (
        <HiddenItemWithActions
            data={data}
            rowMap={rowMap}
            rowKey={data.item.key}
            onClose={() => closeRow(rowMap, data.item.key)}
            onDelete={() => onDelete(data.item.key)}
        />
    );

    return (
        <SafeAreaView >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <SwipeListView
                data={list}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                // leftOpenValue={60}
                rightOpenValue={-120}
                stopLeftSwipe={100}
                stopRightSwipe={-201}
                rightActivationValue={-200}
                rightActionValue={-screenWidth}
                onRightActionStatusChange={onRightActionStatusChange}
                swipeGestureEnded={swipeGestureEnded}
                swipeToOpenPercent={10}
                swipeToClosePercent={10}
                useNativeDriver={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rowFront: {
        height: vh(10),
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backBtn: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        justifyContent: 'center',
    },
    backLeftBtn: {
        alignItems: 'flex-end',
        backgroundColor: COLORS.green,
        paddingRight: 16,
    },
    backRightBtn: {
        right: 0,
        alignItems: 'flex-start',
        paddingLeft: 12,
    },
    backRightBtnLeft: {
        backgroundColor: '#00bfff',
    },
    backRightBtnRight: {
        backgroundColor: COLORS.red,
    },
    backBtnInner: {
        alignItems: 'center',
    },
    backBtnText: {
        color: COLORS.white,
        marginTop: 2,
    },
});

export default AllUser;