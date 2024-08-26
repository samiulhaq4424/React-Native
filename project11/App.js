/* eslint-disable */

import React from 'react';
import { useState } from 'react';
import {StyleSheet,Text, TouchableOpacity, View} from 'react-native';

/**
 * 1) Style with Button (Note: default <Button> bhot jyada styles ko support nahi karta), so we have alternatives i.e. TouchableHighlight & TouchableOpacity (component: TouchHighLightComp)
 * 2) Static Radio Button (in React-Native: radio-button nai hota using import) (component: RadioButton)
 * 3) Dynamic Radio Button (component: DynamicRadioButton)
 * 4) Activity Indicator (Loader) (component: ActivityIndic)
 * 5) Modal in React-Native (component: ModalComp)
*/

import TouchHighLightComp from './components/TouchHighLightComp';
import RadioButton from './components/RadioButton';
import DynamicRadioButton from './components/DynamicRadioButton';
import ActivityIndic from './components/ActivityIndic';
import ModalComp from './components/ModalComp';




const App = () => {
  
 


  return (
    <View style={styles.main}>
      
      <TouchHighLightComp/>

      {/* <RadioButton/> */}

      {/* <DynamicRadioButton/> */}

      {/* <ActivityIndic/> */}

      {/* <ModalComp/> */}

    </View>
  );
};

const styles = StyleSheet.create({

  main:{
    flex: 1,
    alignItems: 'center', //centers the content horizontally (along the cross-axis)  //using this buttons are not aligned in a staright vertical line
    justifyContent: 'center', //centers the content vertically (along the main axis)
  },

  text:{
    fontSize:30, 
    color: 'green', 
    textAlign: 'center', 
    marginBottom: 50,
  },

  radio:{
    height: 40,
    width: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20, //for circle half of width
    margin: 10,
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  radioText:{
    fontSize: 20,
    fontWeight: '800',
    color: 'orange'
  },

  radioBgc:{
    //for inner radio button define this
    backgroundColor: 'green',
    height: 30,
    width: 30,
    borderRadius: 18,
    margin: 3 // adjust to put the circle in the center; manually karna hoga
  },
});

export default App;
