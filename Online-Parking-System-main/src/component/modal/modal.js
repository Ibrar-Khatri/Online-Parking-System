import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Modal, Button } from 'native-base'




function WarningModal(props) {
    return <>

        <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)} >
            <Modal.Content maxWidth="400px">
                <Modal.Header>Alert !!!</Modal.Header>
                <Modal.Body>{props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={() => props.setShowModal(false)}>OK</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}


export default WarningModal