
import React, { useState } from 'react';

import {useEffect} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


/**
 * 1) JSON server Api integrate with React-Native (component: ApiIntegrate)
*/

import ApiIntegrate from './components/ApiIntegrate';

const App = () => {
  const [data, setData] = useState([]);

  const getApidata = async () =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url);
    const dataObjFetched = await result.json();
    // console.error(dataObjFetched);
    setData(dataObjFetched);
  }


  useEffect(()=>{
    getApidata();
  },[]);

  
  return (
    <ScrollView>
      <Text style={{fontSize:25, color: 'green', textAlign: 'center', marginBottom: 30}} >JSON server Api integration</Text>

      {
        data.length !==0 ?
          data.map((item) => (
           <View style={styles.view}>
            <Text style={styles.text} >Name: {item.name}</Text>
            <Text style={styles.text} >Age: {item.age}</Text>
            <Text style={styles.text} >Email: {item.email}</Text>
           </View>))
        : ''
      }

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize:20, 
    marginBottom: 20,
  },
  view: {
    borderWidth: 1
  },
});

export default App;
