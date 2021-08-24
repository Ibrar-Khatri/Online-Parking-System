import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import style from './networkErrorScreenStyle';

function NetworkErrorScreen({ route, navigation }) {
  let [isLoading, setIsLoading] = useState(false)

  return (
    <>
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
          isLoading={isLoading}
          onPress={() => { route.params.isUserLogin(); setIsLoading(true) }}>
          Try Again
        </Button>
      </View>
    </>
  );
}

export default NetworkErrorScreen;
