import { useDrawerStatus } from '@react-navigation/drawer';
import { HStack, Spinner } from 'native-base';
import React, { useEffect } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import style from './homeStyle';

function Home({ navigation, route }) {
  let bookings = useSelector(state => state.bookingReducer.userBookings);
  let parkingAreas = [
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
  ];
  useEffect(() => {
    route.params.setNavigationState(navigation)
  }, [])
  return (
    <>
      {
        bookings ?
          <ImageBackground
            resizeMode="cover"
            source={require('../../../assets/backgroundGif.gif')}
            style={style.backgroundImage}>
            <ScrollView>
              <View style={style.viewStyle}>
                {parkingAreas.map((area, ind) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      key={ind}
                      onPress={() => {
                        navigation.navigate('featureScreen',
                          { location: area, initialRouteName: 'add-booking', title: 'Add Booking' });
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
            </ScrollView>
          </ImageBackground>
          : <HStack style={style.spinnerStyle}>
            <Spinner size='lg' />
          </HStack>
      }
    </>
  );
}

export default Home;
