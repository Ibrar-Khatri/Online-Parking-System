import React from 'react'
import { Button, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import style from './modalStyle'




function WarningModal(props) {
    return <>

        <View >
            <Modal isVisible={props.showModal}>
                <View style={style.modalDisplay}>
                    <Button title="Hide modal" onPress={() => props.setShowModal(false)} />
                </View>
            </Modal>


        </View>
    </>
}


export default WarningModal