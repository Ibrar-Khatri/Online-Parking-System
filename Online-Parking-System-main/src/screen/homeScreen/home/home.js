import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import style from './homeStyle';

function Home({ navigation }) {
  let bookings = useSelector(state => state.bookingReducer.userBookings);
  let parkingAreas = [
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
  ];
  return (
    <ImageBackground
      resizeMode="cover"
      source={{ uri: 'https://i.gifer.com/RNQQ.gif' }}
      style={style.backgroundImage}>
      {
        bookings?<ScrollView>
        <View style={style.viewStyle}>
          {parkingAreas.map((area, ind) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={ind}
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
      </ScrollView>:<Text>Loading</Text>
      }
    </ImageBackground>
  );
}

export default Home;
