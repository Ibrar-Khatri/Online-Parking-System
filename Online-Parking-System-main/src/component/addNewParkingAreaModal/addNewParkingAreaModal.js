import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Modal, Button, Input, ScrollView, useToast } from 'native-base'
import { Formik } from "formik";
import * as yup from 'yup';
import base64 from 'react-native-base64'
import style from './addNewParkingAreaModalStyle'
import { updateUserPassword } from '../../apis/userApis'
import { useDispatch, useSelector } from 'react-redux';
import InputModalWrapper from '../inputModalWrapper/inputModalWrapper';
import CustomToast from '../customToast/customToast'
import { addNewParkingArea } from '../../apis/bookingApis';


function AddNewParkingAreaModal({ showAddNewParkingAreaModal, setShowAddNewParkingAreaModal, }) {
    let dispatch = useDispatch()
    let [inValidInput, setInvalidInput] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let toast = useToast()

    const createNewParkingAreaValidationSchema = yup.object().shape({
        location: yup
            .string()
            .min(10, ({ min }) => `Location name may not be less than ${min} characters`)
            .max(50, ({ max }) => `Location name may not be greater than ${max} characters`)
            .required('Required'),
        numberOfSlots: yup
            .number()
            .typeError('Oops! This is not a number')
            .required('Required')
            .min(10, ({ min }) => `Number of slots may not be less than ${min}`)
            .max(50, ({ max }) => `Location name may not be greater than ${max} characters`),
    });

    function addNewLocation(value, action) {
        setInvalidInput(false)
        setIsLoading(true)
        let locationDetails = {
            location: value.location,
            numberOfSlots: value.numberOfSlots
        }
        console.log(locationDetails)

        addNewParkingArea(locationDetails)
            .then(res => {
                setIsLoading(false)
                setShowAddNewParkingAreaModal(false)
                action.resetForm({
                    values: {
                        location: '', numberOfSlots: '',
                    }
                })
                if (res.data.status) {
                    dispatch({ type: 'addNewLocation', payload: res.data.locationDetails })
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
            .catch(err => {
                setIsLoading(false)
                setShowAddNewParkingAreaModal(false)
                toast.show({
                    placement: "top",
                    duration: 1500,
                    render: () => <CustomToast type='error' description='Sorry something went wrong, Please try again' />
                })
            })
    }

    return <>
        <InputModalWrapper showModal={showAddNewParkingAreaModal}>
            <Formik initialValues={{ location: '', numberOfSlots: '' }}
                validationSchema={createNewParkingAreaValidationSchema}
                onSubmit={addNewLocation}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (<>
                    <Modal.Header ><Text style={style.modalHeaderText}>Add New Parking</Text></Modal.Header>
                    <Modal.Body style={style.bodyStyle}>
                        <View style={style.inputFieldsStyleView}>
                            <Input
                                style={style.inputFieldStyle}
                                value={values.location}
                                onChangeText={handleChange('location')}
                                isInvalid={inValidInput && errors.location}
                                placeholder="Name of location"
                                variant="filled"
                                h={{
                                    base: '60%',
                                    md: '60%'
                                }}
                            />
                            {
                                inValidInput && errors.location && <Text style={style.inValidInputTextStyle}>{errors.location}</Text>
                            }
                        </View>
                        <View style={style.inputFieldsStyleView}>
                            <Input
                                style={style.inputFieldStyle}
                                value={values.numberOfSlots}
                                onChangeText={handleChange('numberOfSlots')}
                                isInvalid={inValidInput && errors.numberOfSlots}
                                placeholder="Number of slots"
                                variant="filled"
                                type='number'
                                h={{
                                    base: '60%',
                                    md: '60%'
                                }}
                            />
                            {
                                inValidInput && errors.numberOfSlots && <Text style={style.inValidInputTextStyle}>{errors.numberOfSlots}</Text>
                            }
                        </View>
                    </Modal.Body>
                    <Modal.Footer style={style.maodalFooter}>
                        <Button style={style.buttonStyle} onPress={() => setShowAddNewParkingAreaModal(false)}><Text style={style.buttonText}>Cancel</Text></Button>
                        <Button style={style.buttonStyle} isLoading={isLoading} onPress={() => { handleSubmit(); setInvalidInput(true) }}><Text style={style.buttonText}>Update password</Text></Button>
                    </Modal.Footer>
                </>)}
            </Formik>
        </InputModalWrapper>

    </>
}
export default AddNewParkingAreaModal