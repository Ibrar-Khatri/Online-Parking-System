import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import * as yup from 'yup';
import { Formik } from 'formik';
import AuthenticationButton from '../authenticationButton/button';
import { signupWithDetails } from '../../apis/userApis';
import style from './signUpCardStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WarningModal from '../modal/modal';
import { useDispatch } from 'react-redux';

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
    let userDetails = {
      name: value.name,
      email: value.email,
      password: value.password,
    };
    signupWithDetails(userDetails)
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
                      onChangeText={handleChange('name')}
                      placeholder="Name"

                    />
                    {showInvalidInput && errors.name && (
                      <Text style={style.invalidInputStyle}>{errors.name}</Text>
                    )}
                  </View>
                  <View style={style.fieldInput}>
                    <Input
                      variant="underlined"
                      placeholder="Email"
                      style={style.emailInput}
                      onChangeText={handleChange('email')}
                      value={values.email}
                      textContentType="emailAddress"
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
                      style={style.emailInput}
                      onChangeText={handleChange('password')}
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
          <View style={style.messageText}>
            <Text>Already have an account?</Text>
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
