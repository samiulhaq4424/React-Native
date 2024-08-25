import React from 'react';

import { useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';

import UseEffectComponent1 from './components/UseEffectComponent1';
import UseEffectComponent2 from './components/UseEffectComponent2';
import ToggleComponent from './components/ToggleComponent';

/**
 * 1) Life Cycle with useEffect (component: UseEffectComponent1)
 * 2) useEffect hook as ComponentDidUpdate life cycle method (component: UseEffectComponent1)
*/


const App = () => {

  const [show, setShow] = useState(true);
  return(
    <View>

      <UseEffectComponent1/>

      <UseEffectComponent2/>

      <ToggleComponent/>
      
    </View>
  );
};

export default App;

