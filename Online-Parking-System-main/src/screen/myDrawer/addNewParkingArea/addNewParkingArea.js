import { HStack, Spinner, View } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground, Text, } from 'react-native';
import { Image } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import style from './addNewParkingAreaStyle'

function AddNewParkingArea({ route, navigation }) {
  useEffect(() => {
    route.params.setNavigationState(navigation)
  }, [])
  let parkingAreas = [
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
    'DHA Karachi',
    'Gulshane-e-Iqal Karachi',
    'Clifton Karachi',
  ];
  useEffect(() => {
    route.params.setNavigationState(navigation)
  })
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/package-lock.jpeg')}
        style={style.backgroundImage}>
        <View style={style.titleView}>
          <Text style={style.titleText}>Parking Areas</Text>
        </View>
        <ScrollView>
          <View style={style.viewStyle}>
            {parkingAreas.map((area, ind) => {
              return (
                <View style={style.cardStyle} key={ind}>
                  <View style={style.locationAndSlotTextView}>
                    <Text style={style.locationText}>{area}</Text>
                    <Text style={style.slotsText}>Slots 20</Text>
                  </View>
                  <TouchableOpacity style={style.deleteIconView}>
                    <Image
                      resizeMode='contain'
                      alt='delete icon'
                      style={style.deleteIcon}
                      source={require('../../../assets/deleteIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={style.createLocationIconView}>
          <Image
            resizeMode='contain'
            alt='edit icon'
            style={style.createLocationIcon}
            source={require('../../../assets/createLocationcon.png')}
          />
        </View>
      </ImageBackground>
    </>
  )
}
export default AddNewParkingArea;