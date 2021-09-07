import React, { useState } from "react";
import { Input, Icon, Box, View, Text, Button } from "native-base"
import style from './profileScreenCardStyle'
import { Image } from "react-native";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from 'yup';



function ProfileScreenCard() {
    let userDetails = useSelector(state => state.userReducer.userDetails);
    // let [userName, setUserName] = useState(userDetails.displayName)
    // let [email, setEmail] = useState(userDetails.email)
    // let [password, setPassword] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [invalidName, setInvalidName] = useState(false)
    let [inValidPassword, setInvalidPassowrd] = useState(false)
    let [inValidNewPassword, setInvalidNewPassword] = useState(false)


    const updateUserDetailsValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
        newPassword: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`),
    });



    function updateUserDetails() {

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
                            value={values.name}
                            onChangeText={handleChange('name')}
                            isInvalid={errors.name}
                            placeholder="Name"
                            variant="filled"
                            InputRightElement={
                                <Image source={require('../../assets/userNameIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                    </View>
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.email}
                            placeholder="Email"
                            variant="filled"
                            InputRightElement={
                                <Image source={require('../../assets/emailIcon.png')} style={style.inputFieldIconStyle} />
                            }
                            isReadOnly={true}
                        />
                    </View>
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.password}
                            isInvalid={errors.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            variant="filled"
                            InputRightElement={
                                <Image source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                    </View>
                    <View style={style.inputFieldsStyleView}>
                        <Input
                            style={style.inputFieldStyle}
                            value={values.newPassword}
                            onChangeText={handleChange('newPassword')}
                            isInvalid={errors.newPassword}
                            placeholder="New Password"
                            variant="filled"
                            InputRightElement={
                                <Image source={require('../../assets/passwordIcon.png')} style={style.inputFieldIconStyle} />
                            }
                        />
                    </View>
                    <Button style={style.buttonStyle} onPress={() =>handleSubmit()}><Text style={style.buttonText}>Update</Text></Button>
                </>)}
            </Formik>
        </View>
    </>
}


export default ProfileScreenCard