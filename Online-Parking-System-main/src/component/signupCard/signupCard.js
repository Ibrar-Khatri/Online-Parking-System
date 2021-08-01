import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'native-base';
import * as yup from 'yup'
import { Formik } from 'formik';
import AuthenticationButton from '../button/button';
import {signupWithDetails} from '../../apis/user'
import style from './signUpCardStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignupCard(props) {

  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })





  function signupWithDet(value) {
        setIsLoading(true)
        let userDetails = {
            name: value.name,
            email: value.email,
            password: value.password,
        }
        console.log(userDetails)

        signupWithDetails(userDetails)
          .then(async res => {
            console.log('Responed from signup' + res)
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
              console.log(err, 'error in signup');
          });    
    }

    let [isLoading, setIsLoading] = useState(false)
    let [showInvalidInput,setShowInvalidInput] = useState(false)
  
    return (
    <>
      <View style={style.card}>
        <View>
          <Text style={style.signUpText}>Signup</Text>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={(value) => signupWithDet(value)}>
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
                    value={values.name}
                    variant="underlined"
                    onChangeText={handleChange('name')}
                    placeholder="Name"
                    style={style.emailInput}
                  />
                  {
                    showInvalidInput && errors.name && <Text>{errors.name}</Text>
                  }

                  <Input
                    variant="underlined"
                    placeholder="Email"
                    style={style.emailInput}
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
                    style={style.emailInput}
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {
                   showInvalidInput && errors.password && <Text>{errors.password}</Text>
                  }
                </View>
                <AuthenticationButton
                  buttonType="Signup"
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
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={style.loginText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default SignupCard;