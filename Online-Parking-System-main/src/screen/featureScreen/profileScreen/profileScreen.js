import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { ScrollView, Image, Actionsheet, useToast } from 'native-base'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux'
import ProfileScreenCard from '../../../component/profileScreenCard/profileScreenCard'
import style from './profileScreenStyle'
import { heightPercentageToDP as vh } from '../../../responsive/responsive';


function UserProfileScreen({ route, navigation }) {
    let userDetails = useSelector(state => state.userReducer.userDetails)
    let [actionSheetInvoke, setActionSheetInvoke] = useState(false)
    let [profileImageUri, setProfileImageUri] = useState('')
    let [profileImage, setProfileImage] = useState('')

    let unmounted;
    useEffect(() => {
        unmounted = false;

        return () => {
            unmounted = true;
        }
    }, [])

    const toast = useToast()

    let getImageFromLibrary = (conditon) => {
        var options = {
            mediaType: 'photos',
            includeBase64: true,
        };

        if (conditon === 'camera') {
            launchCamera(options, (image) => {
                setActionSheetInvoke(false)
                if (image.didCancel) {
                    console.log('User cannot select image ')
                } else if (image.errorCode) {
                    console.log('some thing went wrong ')
                } else {
                    if ((image.assets[0].fileSize / 1000000) <= 1) {
                        setProfileImageUri(image.assets[0].uri)
                        setProfileImage({
                            base64: image.assets[0].base64,
                            condition: 'updateProfileImage'
                        })
                    } else {
                        setProfileImageUri(userDetails.profileImage)
                        setProfileImage('')
                        console.log("image should be less than 1 mb")
                    }
                }
            })
        } else if (conditon === 'library') {
            launchImageLibrary(options, (image) => {
                setActionSheetInvoke(false)
                if (image.didCancel) {
                    console.log('User cannot select image ')
                } else if (image.errorCode) {
                    console.log('some thing went wrong ')
                } else {
                    if ((image.assets[0].fileSize / 1000000) <= 1) {
                        setProfileImageUri(image.assets[0].uri)
                        setProfileImage({
                            base64: image.assets[0].base64,
                            condition: 'updateProfileImage'
                        })
                    } else {
                        toast.show({
                            placement: "top",
                            status: "error",
                            description: "Image Should be less than 1 mb",
                        })
                        setProfileImageUri(userDetails.profileImage)
                        setProfileImage('')
                    }
                }
            })
        } else if (conditon === 'removeImage') {
            setActionSheetInvoke(false)
            setProfileImageUri('')
            setProfileImage({
                condition: 'removeProfileImage'
            })
        }

        // switch (conditon) {
        //     case 'camera': {

        //         return
        //     }
        //     case 'library':
        //     case 'removeImage': 
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
