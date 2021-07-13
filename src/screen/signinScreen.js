import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import SigninCard from '../component/signinCard/signinCard';
import OPSText from '../component/OPSText/OPSText';

function SigninScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        <OPSText />
        <SigninCard navigation={navigation} />
      </ScrollView>
    </>
  );
}

export default SigninScreen;
