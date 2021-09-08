import React, { useState } from "react";
import { Input, Icon, Box, View, Text, Button } from "native-base"
import style from './profileScreenCardStyle'
import { Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import ChangePasswordModal from "../changePasswordModal/changePasswordModal";



function ProfileScreenCard() {
    let userDetails = useSelector(state => state.userReducer.userDetails);
    let [inValidInput, setInvalidInput] = useState(false)
    let [showModal, setShowModal] = useState(false)



    const updateUserDetailsValidationSchema = yup.object().shape({
        name: yup.string().required('Required'),
        password: yup
            .string()
            .required('Required')
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
    });



    function updateUserDetails() {
        console.log('valid input')
    }



    return <>
        <View style={style.cardStyle}>
            <Formik initialValues={{ name: userDetails.displayName, email: userDetails.email, password: '', newPassword: '' }}
                validationSchema={updateUserDetailsValidationSchema}
                onSubmit={value => updateUserDetails(value)}>

                {({
                    handleChange,
                    handleBlur,
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
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.password}
                            isInvalid={inValidInput && errors.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            variant="filled"
                            InputRightElement={
                                <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                        {
                            inValidInput && errors.password && <Text style={style.inValidInputTextStyle}>{errors.password}</Text>
                        }
                    </View>
                    <TouchableOpacity style={style.changePasswordTexView} onPress={() => setShowModal(true)}><Text style={style.changePasswordText}>Change Password</Text></TouchableOpacity>
                    <Button style={style.buttonStyle} onPress={() => {handleSubmit() ;setInvalidInput(true)}}><Text style={style.buttonText}>Update</Text></Button>
                </>)}
            </Formik>
            {
                showModal ? <ChangePasswordModal showModal={showModal} setShowModal={setShowModal} /> : null
            }
        </View>
    </>
}


export default ProfileScreenCard