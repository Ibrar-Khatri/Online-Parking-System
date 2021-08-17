import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import style from './homeStyle';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';

function Home({ navigation }) {
  let parkingAreas = [
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
  ];
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: 'https://i.gifer.com/RNQQ.gif' }}
        style={style.backgroundImage}>
        <View style={style.viewStyle}>
          {parkingAreas.map((area, i) => {
            console.log(i);
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  navigation.navigate('featureScreen', { location: area });
                }}>
                <View style={style.cardStyle}>
                  <Image
                    style={style.imageStyle}
                    source={require('../../../assets/location.png')}
                  />
                  <Text style={style.locationText}>{area}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </>
  );
}

export default Home;
