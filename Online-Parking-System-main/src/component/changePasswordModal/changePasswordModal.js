import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Modal, Button, Input, ScrollView, useToast } from 'native-base'
import { Formik } from "formik";
import * as yup from 'yup';
import base64 from 'react-native-base64'
import style from './changePasswordModalStyle'
import { updateUserPassword } from '../../apis/userApis'
import { useSelector } from 'react-redux';
import InputModalWrapper from '../inputModalWrapper/inputModalWrapper';
import CustomToast from '../../component/customToast/customToast'


function ChangePasswordModal({ showChangePasswordModal, setShowChangePasswordModal, }) {
    let userDetails = useSelector(state => state.userReducer.userDetails);
    let [inValidInput, setInvalidInput] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let toast = useToast()

    const passwordValidationSchema = yup.object().shape({
        oldPassword: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            // .max(16, ({ max }) => `Password must be at least ${max} characters`)
            .required('Required'),
        newPassword: yup
            .string()
            .required('Required')
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
        confirmPassword: yup
            .string()
            .required('Required')
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
    });

    function updatePassword(value, action) {
        setInvalidInput(false)
        setIsLoading(true)
        let oldPassword = base64.encode(value.oldPassword)
        let newPassword = base64.encode(value.newPassword)
        let update = {
            uid: userDetails.uid,
            email: userDetails.email,
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        updateUserPassword(update)
            .then(res => {
                setIsLoading(false)
                setShowChangePasswordModal(false)
                if (res.data.status) {
                    action.resetForm({
                        values: {
                            oldPassword: '', newPassword: '', confirmPassword: ''
                        }
                    })
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
            .catch(err => {
                setIsLoading(false)
                setShowChangePasswordModal(false)
                toast.show({
                    placement: "top",
                    duration: 1500,
                    render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
                })
            })
    }

    return <>
        <InputModalWrapper showModal={showChangePasswordModal}>
            <Formik initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
                validationSchema={passwordValidationSchema}
                onSubmit={updatePassword}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (<>
                    <Modal.Header>Change Password</Modal.Header>
                    <Modal.Body style={style.bodyStyle}>
                        <View style={style.inputFieldsStyleView}>
                            <Input
                                style={style.inputFieldStyle}
                                value={values.oldPassword}
                                onChangeText={handleChange('oldPassword')}
                                maxLength={16}
                                isInvalid={inValidInput && errors.oldPassword}
                                placeholder="Old Password"
                                variant="filled"
                                type='password'
                                InputRightElement={
                                    <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                                }
                            />
                            {
                                inValidInput && errors.oldPassword && <Text style={style.inValidInputTextStyle}>{errors.oldPassword}</Text>
                            }
                        </View>
                        <View style={style.inputFieldsStyleView}>
                            <Input
                                style={style.inputFieldStyle}
                                value={values.newPassword}
                                onChangeText={handleChange('newPassword')}
                                maxLength={16}
                                isInvalid={inValidInput && errors.newPassword}
                                placeholder="New Password"
                                variant="filled"
                                type='password'
                                InputRightElement={
                                    <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                                }
                            />
                            {
                                inValidInput && errors.newPassword && <Text style={style.inValidInputTextStyle}>{errors.newPassword}</Text>
                            }
                        </View>
                        <View style={style.inputFieldsStyleView}>
                            <Input
                                style={style.inputFieldStyle}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                maxLength={16}
                                isInvalid={inValidInput && errors.confirmPassword}
                                placeholder="Confirm Password"
                                variant="filled"
                                type='password'
                                InputRightElement={
                                    <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                                }
                            />
                            {
                                inValidInput && errors.confirmPassword && <Text style={style.inValidInputTextStyle}>{errors.confirmPassword}</Text>
                            }

                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={style.buttonStyle} onPress={() => setShowChangePasswordModal(false)}><Text style={style.buttonText}>Cancel</Text></Button>
                        <Button style={style.buttonStyle} isLoading={isLoading} onPress={() => { handleSubmit(); setInvalidInput(true) }}><Text style={style.buttonText}>Update password</Text></Button>
                    </Modal.Footer>
                </>)}
            </Formik>
        </InputModalWrapper>

    </>
}
export default ChangePasswordModal