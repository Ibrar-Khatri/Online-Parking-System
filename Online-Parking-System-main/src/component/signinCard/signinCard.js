import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import * as yup from 'yup'
import { Formik } from 'formik';
import AuthenticationButton from '../button/button';
import {signupWithDetails} from '../../apis/user'
import style from './signinCardStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SigninCard(props) {

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })





  function signinWithDet(value) {
        setIsLoading(true)
        let userDetails = {
            email: value.email,
            password: value.password,
        }

        signupWithDetails(userDetails)
          .then(async res => {
            console.log('Responed from signin' + res)
            if(res.data.status){
              await AsyncStorage.setItem('userID', res.data.user.user.uid)
              setIsLoading(false)
              props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'home-screen' }],
              });
            }

          })
          .catch(err => {
              setIsLoading(false)
              console.log('error in signup'+err);
          });    
    }

    let [isLoading, setIsLoading] = useState(false)
    let [showInvalidInput,setShowInvalidInput] = useState(false)
  
    return (
    <>
      <View style={style.card}>
        <View>
          <Text style={style.signInText}>Login</Text>
          <Formik
            initialValues={{email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={(value) => signinWithDet(value)}>
            {(
              { handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid, },
            ) => (
              <View >
                <View style={style.fieldView}>
                  <Input
                    variant="underlined"
                    placeholder="Email"
                    style={style.fieldStyle}
                    onChangeText={handleChange('email')}
                    value={values.email}
                  />
                  {
                    showInvalidInput && errors.email && <Text>{errors.email}</Text>
                  }
                  <Input
                    variant="underlined"
                    type="password"
                    placeholder="Password"
                    style={style.fieldStyle}
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {
                   showInvalidInput && errors.password && <Text>{errors.password}</Text>
                  }
                </View>
                <AuthenticationButton
                  buttonType="Signin"
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  setShowInvalidInput = {setShowInvalidInput}
                />
              </View>
            )}
          </Formik>
        </View>
        <View>
          <View style={style.messageText}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('signup-screen')}>
              <Text style={style.loginText}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default SigninCard;