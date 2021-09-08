import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Modal, Button } from 'native-base'




function WarningModal({message,showModal,setShowModal,}) {
    return <>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
            <Modal.Content maxWidth="400px">
                <Modal.Header>Alert !!!</Modal.Header>
                <Modal.Body>{message}
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={() => setShowModal(false)}>OK</Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}


export default WarningModal