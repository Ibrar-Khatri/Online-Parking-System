import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SignupCard from '../../src/component/signupCard';
import OPSText from '../../src/component/OPSText';

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

