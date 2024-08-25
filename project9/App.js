import React from 'react';

import { useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';

import UseEffectComponent1 from './components/UseEffectComponent1';
import UseEffectComponent2 from './components/UseEffectComponent2'

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

      <Text style={styles.textStyle}>Show/Hide Component:</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)} />
        {
          show ? <User/> : '' //can write null, undefined also
          
        }
      
    </View>
  );
};

const User = () =>{
  return(
    <View>
      <Text style={{fontSize: 22, color: 'orange'}}>User Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22, 
    marginTop: 10, 
    borderTopWidth: 2,
    color: 'green',
  },
});

export default App;

