import React, { useState } from "react";
import { Input, Icon, Box, View, Text, Button, useToast, Modal } from "native-base"
import style from './profileScreenCardStyle'
import { Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import ChangePasswordModal from "../changePasswordModal/changePasswordModal";
import { updateUserProfile } from "../../apis/userApis";
import base64 from "react-native-base64";
import InputModalWrapper from "../inputModalWrapper/inputModalWrapper";
import CustomToast from '../../component/customToast/customToast'



function ProfileScreenCard({ profileImage, setProfileImage }) {

    let dispatch = useDispatch()
    let userDetails = useSelector(state => state.userReducer.userDetails);

    let [inValidInput, setInvalidInput] = useState(false)
    let [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    let [showConfirmationPasswordModal, setShowConfirmationPasswordModal] = useState(false)
    let [userName, setUserName] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [isLoading, setIsLoading] = useState(false)

    let toast = useToast()

    const updateUserDetailsValidationSchema = yup.object().shape({
        name: yup.string().required('Required'),
    });



    function updateUserDetails() {
        setInvalidInput(false)
        let password = base64.encode(confirmPassword)
        let formData = new FormData();
        let update = {
            uid: userDetails.uid,
            name: userName,
            email: userDetails.email,
            password: password,
        }
        formData.append('userDetails', JSON.stringify(update))
        formData.append('profileImage', JSON.stringify(profileImage))
        if (profileImage || (userName.trim() !== userDetails.displayName)) {
            setIsLoading(true)
            updateUserProfile(formData)
                .then(res => {
                    setIsLoading(false)
                    setShowConfirmationPasswordModal(false)
                    setConfirmPassword('')
                    if (res.data.status) {
                        toast.show({
                            placement: "top",
                            duration: 1500,
                            render: () => <CustomToast type='success' description={res.data.message} />
                        })
                        setProfileImage('')
                        dispatch({ type: 'updateUserDetails', payload: res.data.update })
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
                    setShowConfirmationPasswordModal(false)
                    setConfirmPassword('')
                    toast.show({
                        placement: "top",
                        duration: 1500,
                        render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
                    })
                })
        } else {
            setIsLoading(false)
            setShowConfirmationPasswordModal(false)
            setConfirmPassword('')
            toast.show({
                placement: "top",
                duration: 1500,
                render: () => <CustomToast type='info' description='You have not made any change' />
            })
        }
    }
    return <>
        <View style={style.cardStyle}>
            <Formik initialValues={{ name: userDetails.displayName, email: userDetails.email, password: '' }}
                validationSchema={updateUserDetailsValidationSchema}
                onSubmit={(value, action) => { setUserName(value.name); setShowConfirmationPasswordModal(true) }}>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (<>
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.email}
                            placeholder="Email"
                            variant="filled"
                            InputRightElement={
                                <Image resizeMode='contain' source={require('../../assets/emailIcon.png')} style={style.inputFieldIconStyle} />
                            }
                            isReadOnly={true}
                        />
                    </View>
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.name}
                            onChangeText={handleChange('name')}
                            isInvalid={inValidInput && errors.name}
                            placeholder="Name"
                            variant="filled"
                            InputRightElement={
                                <Image resizeMode='contain' source={require('../../assets/userNameIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                        {
                            inValidInput && errors.name && <Text style={style.inValidInputTextStyle}>{errors.name}</Text>
                        }
                    </View>
                    <TouchableOpacity style={style.changePasswordTexView} onPress={() => setShowChangePasswordModal(true)}><Text style={style.changePasswordText}>
                        Change Password</Text>
                    </TouchableOpacity>
                    <Button style={style.buttonStyle} onPress={() => { handleSubmit(); setInvalidInput(true) }} >
                        <Text style={style.buttonText}>Update</Text>
                    </Button>
                </>)}
            </Formik>
            <InputModalWrapper showModal={showConfirmationPasswordModal}>
                <Modal.Header>Confirmation Password</Modal.Header>
                <Modal.Body>
                    <View style={style.confrimPasswordFieldStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Password"
                            variant="filled"
                            type='password'
                            InputRightElement={
                                <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                    </View>
                </Modal.Body>
                <Modal.Footer style={style.modalFooter}>
                    <Button style={style.confrimPasswordModalButton} onPress={() => { setShowConfirmationPasswordModal(false); setConfirmPassword('') }}>
                        <Text style={style.confrimPasswordModalButtonText}>Cancel</Text>
                    </Button>
                    <Button style={style.confrimPasswordModalButton} isLoading={isLoading} disabled={confirmPassword.length < 6 || confirmPassword.length > 16 || isLoading} onPress={updateUserDetails}>
                        <Text style={style.confrimPasswordModalButtonText}>Update</Text>
                    </Button>
                </Modal.Footer>
            </InputModalWrapper>
            {
                showChangePasswordModal ? <ChangePasswordModal showChangePasswordModal={showChangePasswordModal} setShowChangePasswordModal={setShowChangePasswordModal} /> : null
            }
        </View>
    </>
}


export default ProfileScreenCard