import React from 'react';

import {View, Text} from 'react-native';

/**
 * 1) Input text(making component: InputText)
 * 2) 
 */
import InputText from './components/InputText';

const App = () => {
  //Note: if you just return(<InputText/>); it won't show anything, you have to put in <View> or fragment <>
  return(
    <View>
      <InputText/>
    </View>
  );
};



export default App;
