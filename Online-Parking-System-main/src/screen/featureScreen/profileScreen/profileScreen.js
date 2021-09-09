import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Avatar, ScrollView, Image, Actionsheet } from 'native-base'
import { LinearGradient } from 'react-native-linear-gradient'
import { Header } from 'react-native/Libraries/parkingAppScreen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux'
import ProfileScreenCard from '../../../component/profileScreenCard/profileScreenCard'
import style from './profileScreenStyle'
import { heightPercentageToDP as vh } from '../../../responsive/responsive';


function UserProfileScreen({ route, navigation }) {
    let userDetails = useSelector(state => state.userReducer.userDetails)
    let [profileImage, setProfileImage] = useState()
    let [profileImageUri, setProfileImageUri] = useState('')

    let getImageFromLibrary = () => {
        var options = {
            mediaType: 'photos', saveToPhotos: true
        };
        if (!profileImage) {
            launchCamera(options, (res) => {
                console.log('Response = ', res);
                setProfileImage(res.assets)
            })
            return
        } else {
            setProfileImage('')
        }
    }

    useEffect(() => {
        navigation.setOptions({ title: 'User Profile' })
    })

    return <>
        <ScrollView>
            <View style={style.bgView}>
                <View style={style.avatarAndTextStyle}>
                    <View>
                        <Image
                            resizeMode="cover"
                            size={vh(13)}
                            borderRadius={100}
                            source={profileImage ? { uri: profileImage[0].uri } : require('../../../assets/uploadProfileImageIcon.png')}
                            alt="upload image icon"
                            style={style.uploadImageIcon}
                        />
                        <TouchableOpacity style={style.editIconView} on onPress={getImageFromLibrary}>
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
            <ProfileScreenCard />
            <Actionsheet isOpen={true} >
                <Actionsheet.Content>
                    <Actionsheet.Item
                        startIcon={
                            <Image resizeMode='contain' size={vh(5)} alt='camera icon' source={require('../../../assets/cameraIcon.png')} />
                        }
                    >
                        Take a photo
                    </Actionsheet.Item>
                    <Actionsheet.Item
                        startIcon={
                            <Image resizeMode='contain' size={vh(5)} alt='gallery icon' source={Platform.OS == 'ios' ? require('../../../assets/iosGalleryIcon.png') : require('../../../assets/androidGalleryIcon.png')} />
                        }
                    >
                        Choose from Library
                    </Actionsheet.Item>
                    <Actionsheet.Item>Cancel</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </ScrollView>

    </>;
}

export default UserProfileScreen;
