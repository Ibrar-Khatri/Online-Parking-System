import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import * as yup from 'yup';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import AuthenticationButton from '../authenticationButton/button';
import { signinWithDetails } from '../../apis/userApis';
import style from './signinCardStyle';
import WarningModal from '../modal/modal';
import { heightPercentageToDP as vh } from '../../responsive/responsive';

function SigninCard({ navigation }) {
  const dispatch = useDispatch();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  function signinWithDet(value) {
    setIsLoading(true);
    let userDetails = {
      email: value.email,
      password: value.password,
    };
    signinWithDetails(userDetails)
      .then(async res => {
        if (res.data.status) {
          await AsyncStorage.setItem('userID', res.data.user.uid);
          dispatch({ type: 'addUserDetails', payload: res.data.user });
          setIsLoading(false);
          return navigation.reset({
            index: 0,
            routes: [{ name: 'main-screen' }],
          });
        } else {
          setErrMessage(res.data.error.message);
          setShowModal(true);
          setIsLoading(false);
          return;
        }
      })
      .catch(err => {
        setErrMessage('Please try again later ');
        setShowModal(true);
        setIsLoading(false);
        return;
      });
  }

  let [isLoading, setIsLoading] = useState(false);
  let [showInvalidInput, setShowInvalidInput] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [errMessage, setErrMessage] = useState('');

  return (
    <>
      <View style={style.card}>
        <Text style={style.loginText}>Login</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={value => signinWithDet(value)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={style.fieldView}>
                <View style={style.fieldInput}>
                  <Input
                    isInvalid={showInvalidInput && errors.email && true}
                    variant="underlined"
                    placeholder="Email"
                    fontSize={vh(2.5)}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    textContentType='emailAddress'
                    />
                  {showInvalidInput && errors.email && (
                    <Text style={style.invalidInputStyle}>{errors.email}</Text>
                    )}
                </View>
                <View style={style.fieldInput}>
                  <Input
                  style={style.input}
                    variant="underlined"
                    type="password"
                    fontSize={vh(2.5)}
                    placeholder="Password"
                    isInvalid={showInvalidInput && errors.password && true}
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {showInvalidInput && errors.password && (
                    <Text style={style.invalidInputStyle}> {errors.password}</Text>
                  )}
                </View>
              </View>
              <AuthenticationButton
                buttonType="Signin"
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                setShowInvalidInput={setShowInvalidInput}
              />
            </>
          )}
        </Formik>
        {showModal && (
          <WarningModal
            setShowModal={setShowModal}
            showModal={showModal}
            message={errMessage}
          />
        )}
        <View style={style.messageView}>
          <Text style={style.messageText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('signup-screen')}>
            <Text style={style.signupText}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SigninCard;
