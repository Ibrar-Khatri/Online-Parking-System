import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import OPSText from '../../../component/OPSText/OPSText';
import SignupCard from '../../../component/signupCard/signupCard';
function SignupScreen({navigation}) {
  return (
    <>
      <ScrollView>
        <OPSText />
        <SignupCard navigation={navigation} />
      </ScrollView>
    </>
  );
}

export default SignupScreen;
