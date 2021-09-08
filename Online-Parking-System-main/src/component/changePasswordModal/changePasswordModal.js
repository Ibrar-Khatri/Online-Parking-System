import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Modal, Button, Input, ScrollView } from 'native-base'
import { Formik } from "formik";
import * as yup from 'yup';
import style from './changePasswordModalStyle'


function ChangePasswordModal({ showModal, setShowModal, }) {
    let [inValidInput, setInvalidInput] = useState(false)

    const passwordValidationSchema = yup.object().shape({
        oldPassword: yup
            .string()
            .required('Please enter the old password')
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
        newPassword: yup
            .string()
            .required('Please enter the new password')
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
        confirmPassword: yup
            .string()
            .required('Please enter the password again')
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
    });

    function updatePassword() {

        console.log('valid input')
        setInvalidInput(false)
    }

    return <>
        <ScrollView >

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content >
                    <Formik initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
                        validationSchema={passwordValidationSchema}
                        onSubmit={value => updatePassword(value)}>

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
                                        isInvalid={inValidInput && errors.newPassword}
                                        placeholder="Old Password"
                                        variant="filled"
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
                                        value={values.newPassword}
                                        onChangeText={handleChange('newPassword')}
                                        isInvalid={inValidInput && errors.newPassword}
                                        placeholder="New Password"
                                        variant="filled"
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