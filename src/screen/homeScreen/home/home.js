import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SlotCard from '../../../component/slotCard/slotCard';
import style from './homeStyle';

function Home() {
  return (
    <>
      <ImageBackground
        source={require('../../../assets/photo-1578859695220-856a4f5edd39.jpeg')}
        style={style.backgroundImage}>
        <ScrollView>
          <View style={style.headingDtyle}>
            <Text style={style.textStyle}>Best Spaces</Text>
            <Text style={style.textStyle}>Best Parking</Text>
          </View>
          <View>
            <SlotCard location="DHA Karachi" />
            <SlotCard location="Gulshan-e-Iqbal Karachi" />
            <SlotCard location="Clifton Karachi" />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default Home;
