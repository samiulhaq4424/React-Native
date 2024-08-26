/* eslint-disable */

import React from 'react';
import {StyleSheet, View} from 'react-native';


/**
 * 1) Style with Button (Note: default <Button> bhot jyada styles ko support nahi karta), so we have alternatives i.e. TouchableHighlight & TouchableOpacity (component: TouchHighLightComp)
 * 2) Static Radio Button (in React-Native: radio-button nai hota using import) (component: RadioButton)
 * 3) Dynamic Radio Button (component: DynamicRadioButton)
 * 4) Activity Indicator (Loader) (component: ActivityIndic)
 * 5) Modal in React-Native (component: ModalComp)
 * 6) Pressable in React-Native (component: PressableComp)
 * 7) Status Bar in React-Native (component: statusBarComp)
*/

import TouchHighLightComp from './components/TouchHighLightComp';
import RadioButton from './components/RadioButton';
import DynamicRadioButton from './components/DynamicRadioButton';
import ActivityIndic from './components/ActivityIndic';
import ModalComp from './components/ModalComp';
import PressableComp from './components/PressableComp';
import StatusBarComp from './components/StatusBarComp';


const App = () => {
  
  return (
    <View style={styles.main}>
      
      {/* <TouchHighLightComp/> */}

      {/* <RadioButton/> */}

      {/* <DynamicRadioButton/> */}

      {/* <ActivityIndic/> */}

      {/* <ModalComp/> */}

      {/* <PressableComp/> */}

      <StatusBarComp/>

    </View>
  );
};


const styles = StyleSheet.create({

  main:{
    flex: 1,
    justifyContent: 'center', 
  },
});

export default App;
