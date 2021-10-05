import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import SigninCard from '../../../component/signinCard/signinCard';
import OPSText from '../../../component/OPSText/OPSText';
import { useToast } from 'native-base';
import CustomToast from '../../../component/customToast/customToast';

function SigninScreen({ route, navigation }) {
  let toast = useToast()
  useEffect(() => {
    if (route?.params?.message) {
      toast.show({
        placement: "top",
        duration: 1500,
        render: () => <CustomToast type='info' description={route.params.message} />
      })
    }
  }, [route.params])
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
