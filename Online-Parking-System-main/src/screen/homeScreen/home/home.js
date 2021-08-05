import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import SlotCard from '../../../component/slotCard/slotCard';
import style from './homeStyle';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';

function Home({navigation}) {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={{uri: 'https://i.gifer.com/RNQQ.gif'}}
        style={style.backgroundImage}>
        {/* <View style={style.headingDtyle}>
            <Text style={style.textStyle}>Best Spaces</Text>
            <Text style={style.textStyle}>Best Parking</Text>
          </View> */}
        <View style={style.viewStyle}>
          <SlotCard location="DHA Karachi" navigation={navigation} />
          <SlotCard
            location="Gulshan-e-Iqbal Karachi"
            navigation={navigation}
          />
          <SlotCard location="Clifton Karachi" navigation={navigation} />
        </View>
      </ImageBackground>
    </>
  );
}

export default Home;
