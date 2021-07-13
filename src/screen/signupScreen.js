import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SignupCard from '../component/signupCard/signupCard';
import OPSText from '../component/OPSText/OPSText';

function SignupScreen({ navigation }) {
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

