
import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';


/**
 * 1) JSON server API integrate with React-Native (component: ApiIntegrate)
 * 2) Simple Post API (Static Data) (component: PostApi)
 * 3) Post API with Input Field (Dynamic Data) (component: PostApiInputField)
 * 4) Simple Form Validation (component: FormValidation) 
*/

import ApiIntegrate from './components/ApiIntegrate';
import PostApi from './components/PostApi';
import PostApiInputField from './components/PostApiInputField';
import FormValidation from './components/FormValidation';

const App = () => {
  
  return (
    <View style={{flex:1}}>
      
      {/* <ApiIntegrate/> */}

      {/* <PostApi/> */}
      
      {/* <PostApiInputField/> */}

      <FormValidation/>

    </View>
  );
};

export default App;

