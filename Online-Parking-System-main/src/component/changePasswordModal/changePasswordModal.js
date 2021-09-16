import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Modal, Button, Input, ScrollView } from 'native-base'
import { Formik } from "formik";
import * as yup from 'yup';
import style from './changePasswordModalStyle'
import { updateUserProfile } from '../../apis/userApis';
import { useSelector } from 'react-redux';


function ChangePasswordModal({ showModal, setShowModal, }) {
    let userDetails = useSelector(state => state.userReducer.userDetails);
    let [inValidInput, setInvalidInput] = useState(false)



    const passwordValidationSchema = yup.object().shape({
        oldPassword: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
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

    function updatePassword(value) {
        setInvalidInput(false)
        console.log('Values ==>', value)

        // let formData = new FormData()
        // let update = {
        //     operation: 'updatePassword',
        //     uid: userDetails.uid,
        //     email: userDetails.email,
        //     oldPassword: value.oldPassword,
        //     newPassword: value.newPassword
        // }
        // formData.append('userDetails', JSON.stringify(update))
        // formData.append('profileImage', JSON.stringify(''))

        // updateUserProfile(update)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    return <>
        <ScrollView >
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content >
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
                                <Button style={style.buttonStyle} onPress={() => setShowModal(false)}><Text style={style.buttonText}>Cancel</Text></Button>
                                <Button style={style.buttonStyle} onPress={() => { handleSubmit(); setInvalidInput(true) }}><Text style={style.buttonText}>Update password</Text></Button>
                            </Modal.Footer>
                        </>)}
                    </Formik>
                </Modal.Content>
            </Modal>
        </ScrollView>

    </>
}
export default ChangePasswordModal