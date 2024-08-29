
import React, { useState } from 'react';

import {
  View,
} from 'react-native';


/**
 * 1) JSON server Api integrate with React-Native (component: ApiIntegrate)
 * 2) Simple Post Api (component: PostApi)
*/

import ApiIntegrate from './components/ApiIntegrate';
import PostApi from './components/PostApi';

const App = () => {
    
  return (
    <View style={{flex:1}}>
      
      {/* <ApiIntegrate/> */}

      <PostApi/>
      

    </View>
  );
};

export default App;
