import React, {useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import SigninCard from '../../src/component/signinCard';
import OPSText from '../../src/component/OPSText';

function SigninScreen({navigation}) {
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
