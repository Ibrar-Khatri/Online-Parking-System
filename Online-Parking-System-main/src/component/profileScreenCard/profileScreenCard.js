import React, { useState } from "react";
import { Input, Icon, Box, View, Text, Button, useToast } from "native-base"
import style from './profileScreenCardStyle'
import { Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';
import ChangePasswordModal from "../changePasswordModal/changePasswordModal";
import { updateUserProfile } from "../../apis/userApis";
import base64 from "react-native-base64";



function ProfileScreenCard({ profileImage, setProfileImage }) {

    let dispatch = useDispatch()
    let userDetails = useSelector(state => state.userReducer.userDetails);

    let [inValidInput, setInvalidInput] = useState(false)
    let [showModal, setShowModal] = useState(false)
    let [isLoading, setIsLoading] = useState(false)

    let toast = useToast()

    const updateUserDetailsValidationSchema = yup.object().shape({
        name: yup.string().required('Required'),
        password: yup
            .string()
            .required('Required')
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
    });

    function updateUserDetails(values, action) {
        setInvalidInput(false)
        let password = base64.encode(values.password)
        let formData = new FormData();
        let update = {
            operation: 'updateDetails',
            uid: userDetails.uid,
            name: values.name,
            email: userDetails.email,
            password: password,
        }
        formData.append('userDetails', JSON.stringify(update))
        formData.append('profileImage', JSON.stringify(profileImage))
        if (profileImage || (values.name !== userDetails.displayName)) {
            setIsLoading(true)
            updateUserProfile(formData)
                .then(res => {
                    setIsLoading(false)
                    if (res.data.status) {
                        action.resetForm({
                            values: {
                                email: values.email,
                                name: values.name,
                                password: ''
                            }
                        })
                        toast.show({
                            placement: "top",
                            duration: 1500,
                            status: "success",
                            description: res.data.message,
                        })
                        setProfileImage('')
                        dispatch({ type: 'updateUserDetails', payload: res.data.update })
                    } else {
                        action.resetForm({
                            values: {
                                email: values.email,
                                name: userDetails.displayName,
                                password: ''
                            }
                        })
                        toast.show({
                            placement: "top",
                            duration: 1500,
                            status: "error",
                            description: res.data.message,
                        })
                    }
                })
                .catch(error => {
                    setIsLoading(false)
                    toast.show({
                        placement: "top",
                        duration: 1500,
                        status: "error",
                        description: res.data.message,
                    })
                })
        }
    }

    return <>
        <View style={style.cardStyle}>
            <Formik initialValues={{ name: userDetails.displayName, email: userDetails.email, password: '' }}
                validationSchema={updateUserDetailsValidationSchema}
                onSubmit={(value, action) => updateUserDetails(value, action)}>

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
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.password}
                            isInvalid={inValidInput && errors.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            variant="filled"
                            type='password'
                            InputRightElement={
                                <Image resizeMode='contain' source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                        {
                            inValidInput && errors.password && <Text style={style.inValidInputTextStyle}>{errors.password}</Text>
                        }
                    </View>
                    <TouchableOpacity style={style.changePasswordTexView} onPress={() => setShowModal(true)}><Text style={style.changePasswordText}>Change Password</Text></TouchableOpacity>
                    <Button isLoading={isLoading} style={style.buttonStyle} onPress={() => { handleSubmit(); setInvalidInput(true) }}><Text style={style.buttonText}>Update</Text></Button>
                </>)}
            </Formik>
            {
                showModal ? <ChangePasswordModal showModal={showModal} setShowModal={setShowModal} /> : null
            }
        </View>
    </>
}


export default ProfileScreenCard