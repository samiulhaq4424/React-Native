import React from 'react';

import {View} from 'react-native';

/**
 * 1) Input text(making component: InputText)
 * 2) Making Form using many <TextInput/> (component: InputForm)
 */

import InputText from './components/InputText';
import InputForm from './components/InputForm';

const App = () => {
  //Note: if you just return(<InputText/>); it won't show anything, you have to put in <View> or fragment <>

  return(
    <View>
      <InputText/>
      <InputForm/>
    </View>
  );
};

export default App;
  