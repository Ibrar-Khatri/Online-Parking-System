import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { ScrollView, Image, Actionsheet, useToast } from 'native-base'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux'
import ProfileScreenCard from '../../../component/profileScreenCard/profileScreenCard'
import style from './profileScreenStyle'
import { heightPercentageToDP as vh } from '../../../responsive/responsive';
import CustomToast from '../../../component/customToast/customToast'


function UserProfileScreen({ route, navigation }) {
    let userDetails = useSelector(state => state.userReducer.userDetails)
    let [actionSheetInvoke, setActionSheetInvoke] = useState(false)
    let [profileImageUri, setProfileImageUri] = useState('')
    let [profileImage, setProfileImage] = useState('')

    let [unmounted, setUnmounted] = useState(false);
    useEffect(() => {
        setUnmounted(false)
        return () => setUnmounted(true);
    }, [])
    const toast = useToast()

    let getImageFromLibrary = (conditon) => {
        setActionSheetInvoke(false)
        var options = {
            mediaType: 'photos',
            includeBase64: true,
        };
        if (conditon === 'camera') {
            launchCamera(options, (image) => {
                if (image.assets) {
                    seletedImageSetInState(image)
                }
            })
        } else if (conditon === 'library') {
            launchImageLibrary(options, (image) => {
                if (image.assets) {
                    seletedImageSetInState(image)
                }
            })
        } else if (conditon === 'removeImage') {
            setProfileImageUri('')
            setProfileImage({
                condition: 'removeProfileImage'
            })
        }
    }

    function seletedImageSetInState(image) {
        if ((image.assets[0].fileSize / 1000000) <= 1) {
            if (!unmounted) {
                setProfileImageUri(image.assets[0].uri)
                setProfileImage({
                    base64: image.assets[0].base64,
                    condition: 'updateProfileImage'
                })
            }
        } else {
            if (!unmounted) {
                toast.show({
                    placement: "top",
                    duration: 1500,
                    render: () => <CustomToast type='error' description="Image Should be less than 1 mb" />
                })
                setProfileImageUri(userDetails.profileImage)
                setProfileImage('')
            }
        }
    }

    function isIconPress() {
        if (profileImage) {
            setProfileImageUri(userDetails.profileImage)
            setProfileImage('')
        } else {
            setActionSheetInvoke(true)
        }
    }

    useEffect(() => {
        navigation.setOptions({ title: 'User Profile' })
        setProfileImageUri(userDetails.profileImage)
    }, [])

    return <>
        <ScrollView>
            <View style={style.bgView}>
                <View style={style.avatarAndTextStyle}>
                    <View>
                        <Image
                            resizeMode="cover"
                            size={vh(13)}
                            borderRadius={100}
                            source={profileImageUri ? { uri: profileImageUri } : require('../../../assets/uploadProfileImageIcon.png')}
                            alt="upload image icon"
                            style={style.uploadImageIcon}
                        />
                        <TouchableOpacity activeOpacity={0.7} style={style.editIconView} onPress={isIconPress}>
                            <Image
                                resizeMode="cover"
                                size={vh(3.5)}
                                borderRadius={100}
                                style={style.editIcon}
                                alt="edit icon"
                                source={profileImage ? require('../../../assets/crossIcon.png') : require('../../../assets/editIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.textStyle}>
                        <Text underline style={style.nameStyle}  >{userDetails.displayName}</Text>
                        <Text style={style.emailStyle}>{userDetails.email}</Text>
                    </View>
                </View>
            </View>
            <ProfileScreenCard profileImage={profileImage} setProfileImage={setProfileImage} />
            <Actionsheet isOpen={actionSheetInvoke} onClose={() => setActionSheetInvoke(false)} >
                <Actionsheet.Content>
                    <Actionsheet.Item
                        onPress={() => getImageFromLibrary('camera')}
                        startIcon={
                            <Image resizeMode='contain' size={vh(4)} alt='camera icon' source={require('../../../assets/cameraIcon.png')} />
                        }
                    >
                        Take a photo
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => getImageFromLibrary('library')}
                        startIcon={
                            <Image resizeMode='contain' size={vh(4)} alt='gallery icon' source={Platform.OS == 'ios' ? require('../../../assets/iosGalleryIcon.png') : require('../../../assets/androidGalleryIcon.png')} />
                        }
                    >
                        Choose from Library
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => getImageFromLibrary('removeImage')}
                        startIcon={
                            <Image resizeMode='contain' size={vh(4)} alt='delete icon' source={require('../../../assets/deleteIcon.png')} />
                        }
                    >
                        Remove image
                    </Actionsheet.Item>
                    <Actionsheet.Item onPress={() => setActionSheetInvoke(false)} style={style.cancelTextStyle}>Cancel</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </ScrollView>

    </>;
}

export default UserProfileScreen;
