import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Modal, } from 'native-base'
import { useSelector } from 'react-redux';


function InputModalWrapper(props) {

    return <>
        <Modal isOpen={props.showModal} >
            <Modal.Content >
                {
                    props.children
                }
            </Modal.Content>
        </Modal>

    </>
}
export default InputModalWrapper