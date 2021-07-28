import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'native-base'
import Modal from 'react-native-modal'
import style from './modalStyle'




function WarningModal(props) {
    return <>

        <View  >
            <Modal isVisible={props.showModal}  >
                <View style={style.modalDisplay}>
                    {console.warn(props.showModal, "showmodal")}
                    <Text style={style.titleText}>Alert !!!</Text>
                    <Text style={style.messageText}>End time should be greater than start time</Text>
                    <TouchableOpacity onPress={() => props.setShowModal(false)}>
                        <Text style={style.okButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    </>
}


export default WarningModal