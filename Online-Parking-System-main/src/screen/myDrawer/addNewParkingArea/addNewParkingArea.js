import { Heading, HStack, KeyboardAvoidingView, Spinner, useToast, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, } from 'react-native';
import { Image } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import style from './addNewParkingAreaStyle'
import AddNewParkingAreaModal from '../../../component/addNewParkingAreaModal/addNewParkingAreaModal';
import { useSelector } from 'react-redux';
import { deleteParkingAreaFromDB } from '../../../apis/bookingApis';
import { io } from 'socket.io-client';
import CustomToast from '../../../component/customToast/customToast';
import CustomSpinner from '../../../component/customSpinner/customSpinner';

function AddNewParkingArea({ route, navigation }) {

  let [showAddNewParkingAreaModal, setShowAddNewParkingAreaModal] = useState(false)
  let socket = io(appSetting.severHostedUrl)
  let locations = useSelector(state => state.bookingReducer.locations);
  let toast = useToast()
  let [isLoading, setIsLoading] = useState(false)


  Array.isArray(locations) && locations.sort((a, b) => (a.location > b.location) ? 1 : -1)

  function deleteParkingArea(id, locationName) {
    setIsLoading(true)
    let locationDet = { locationId: id, location: locationName }
    deleteParkingAreaFromDB(locationDet)
      .then(res => {
        setIsLoading(false)
        if (res.data.status) {
          socket.emit('parkingAreaRemoved', { pakringAreaID: id, removedBookingsId: res.data.removedBookingsId })
          toast.show({
            placement: "top",
            duration: 1500,
            render: () => <CustomToast type='success' description={res.data.message} />
          })
        } else {
          toast.show({
            placement: "top",
            duration: 1500,
            render: () => <CustomToast type='error' description={res.data.message} />
          })
        }
      })
      .catch(error => {
        setIsLoading(false)
        toast.show({
          placement: "top",
          duration: 1500,
          render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
        })
      })

  }


  useEffect(() => {
    route.params.setNavigationState(navigation)
  }, [])
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../assets/package-lock.jpeg')}
        style={style.backgroundImage}>
        <View style={style.titleView}>
          <Text style={style.titleText}>Parking Areas</Text>
        </View>
        {
          locations ?
            <ScrollView>
              <View style={style.viewStyle}>
                {locations?.map((area, ind) => {
                  return (
                    <View style={style.cardStyle} key={ind}>
                      <View style={style.locationAndSlotTextView}>
                        <Text style={style.locationText}>{area.location}</Text>
                        <Text style={style.slotsText}>{`Slots ${area.numberOfSlots}`}</Text>
                      </View>
                      <TouchableOpacity style={style.deleteIconView} disabled={isLoading} onPress={() => deleteParkingArea(area.id, area.location)}>
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
            : <View style={style.spinnerStyle}>
              <Spinner />
            </View>

        }
        <View style={style.createLocationIconView}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => setShowAddNewParkingAreaModal(true)}>
            <Image
              resizeMode='contain'
              alt='edit icon'
              style={style.createLocationIcon}
              source={require('../../../assets/createLocationcon.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <AddNewParkingAreaModal showAddNewParkingAreaModal={showAddNewParkingAreaModal} setShowAddNewParkingAreaModal={setShowAddNewParkingAreaModal} />
      <CustomSpinner isLoading={isLoading} />
    </>
  )
}
export default AddNewParkingArea;