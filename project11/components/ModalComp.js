/* eslint-disable */

import { useState } from "react";

import {Text, View, Button, StyleSheet, Modal} from 'react-native';


const ModalComp = () =>{

  const [showModal, setShowModal] = useState(false);

  return (

    <View style={styles.main} >
      <Text style={{fontSize: 40, marginBottom: 60}} >Modal in React-Native</Text>
      {/* Modal used whenever we want to show quick info, warning, error, fields update required, etc. */}


      {/* transparent, visible and animationType are properties of Modal, animationType can be 'slide', 'fade' or 'none' */}
      <Modal transparent={true} visible={showModal} animationType='slide' >
        <View style={styles.wrapper}>
          <View style={styles.modalView}> 
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <Button title='Close Modal' onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        {/* Open the Modal */}
        <Button title='Open Modal' onPress={() => setShowModal(true)} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 30,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,

    shadowColor: 'black',
    elevation: 15,
  },
})

export default ModalComp;
