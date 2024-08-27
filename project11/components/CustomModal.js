/* eslint-disable */

import React, { useState } from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

const CustomModal = () => {

  const [show, setShow] = useState(false);
  return (
      <View style={styles.container}>

        {
           show ?
           <View style={styles.modal}>
            <View style={styles.body}>
              <Text style={styles.text}>Are you sure you want to delete this item?</Text>
              <View style={styles.btn}>
                <Button title='Close' onPress={()=>setShow(false)}  />
              </View>
            </View>
          </View> : ''
        }

        <Button title='Open Dialog' onPress={()=>setShow(true)} />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)', //for transparency when modal appears
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
  text: {
    fontSize: 20,
    marginTop: 80,
  },
});

export default CustomModal;
