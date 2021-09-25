import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import * as yup from 'yup';
import { Formik } from 'formik';
import AuthenticationButton from '../authenticationButton/button';
import { signupWithDetails } from '../../apis/userApis';
import style from './signUpCardStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WarningModal from '../warningModal/warningModal.js';
import { useDispatch } from 'react-redux';
import { heightPercentageToDP as vh } from '../../responsive/responsive';
import base64 from 'react-native-base64';

function SignupCard({ navigation }) {
  const dispatch = useDispatch();

  const loginValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  function signupWithDet(value) {
    setIsLoading(true);
    let password = base64.encode(value.password)
    let userDetails = {
      name: value.name,
      email: value.email,
      password: password,
    };
    signupWithDetails(userDetails)
      .then(async res => {
        if (res.data.status) {
          await AsyncStorage.setItem('userID', res.data.user.uid);
          dispatch({ type: 'addUserDetails', payload: res.data.user });
          setIsLoading(false);
          return navigation.reset({
            index: 0,
            routes: [{ name: 'drawer' }],
          });
        } else {
          setErrMessage(res.data.error.message);
          setIsLoading(false);
          setShowModal(true);
          return;
        }
      })
      .catch(err => {
        setErrMessage('Please try again later ');
        setShowModal(true);
        setIsLoading(false);
      });
  }

  let [isLoading, setIsLoading] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [errMessage, setErrMessage] = useState('');

  return (
    <>
      <View style={style.card}>
        <View>
          <Text style={style.signUpText}>Signup</Text>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={value => signupWithDet(value)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View>
                <View style={style.fieldView}>
                  <View style={style.fieldInput}>
                    <Input
                      value={values.name}
                      variant="underlined"
                      fontSize={vh(2.5)}
                      isInvalid={showInvalidInput && errors.name && true}
                      onChangeText={handleChange('name')}
                      placeholder="Name"
                      maxLength={30}
                    />
                    {showInvalidInput && errors.name && (
                      <Text style={style.invalidInputStyle}>{errors.name}</Text>
                    )}
                  </View>
                  <View style={style.fieldInput}>
                    <Input
                      variant="underlined"
                      placeholder="Email"
                      fontSize={vh(2.5)}
                      style={style.emailInput}
                      isInvalid={showInvalidInput && errors.email && true}
                      onChangeText={handleChange('email')}
                      maxLength={30}
                      value={values.email}
                      autoCapitalize='none'
                    />
                    {showInvalidInput && errors.email && (
                      <Text style={style.invalidInputStyle}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={style.fieldInput}>
                    <Input
                      variant="underlined"
                      type="password"
                      placeholder="Password"
                      fontSize={vh(2.5)}
                      style={style.emailInput}
                      isInvalid={showInvalidInput && errors.password && true}
                      onChangeText={handleChange('password')}
                      maxLength={16}
                      value={values.password}
                    />
                    {showInvalidInput && errors.password && (
                      <Text style={style.invalidInputStyle}>
                        {errors.password}
                      </Text>
                    )}
                  </View>

                </View>
                <AuthenticationButton
                  buttonType="Signup"
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  setShowInvalidInput={setShowInvalidInput}
                />
              </View>
            )}
          </Formik>
          {showModal && (
            <WarningModal
              setShowModal={setShowModal}
              showModal={showModal}
              message={errMessage}
            />
          )}
        </View>
        <View>
          <View style={style.messageView}>
            <Text style={style.messageText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={style.loginText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default SignupCard;
