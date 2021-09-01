import React, { useState } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { Button } from 'native-base';
import style from './networkErrorScreenStyle';

function NetworkErrorScreen({ route, navigation }) {


  return (
    <>
      <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" animated={true} />
      <View style={style.mainView}>
        <Image
          source={require('../../../assets/notInternetConnection.gif')}
          style={style.imageStyle}
        />
        <Text style={style.opsText}>Ooops!</Text>
        <Text style={style.textStyle}>No internet connection found</Text>
        <Text style={style.textStyle}>Check your connection</Text>
        <Button
          style={style.buttonStyle}
          isLoading={route.params.isLoading}
          onPress={() => { route.params.isUserLogin(); route.params.setIsLoading(true) }}>
          <Text style={style.buttonText}>Try Again</Text>
        </Button>
      </View>
    </>
  );
}

export default NetworkErrorScreen;
