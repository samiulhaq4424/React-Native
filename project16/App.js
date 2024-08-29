
import React, { useState } from 'react';

import {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
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
    <View>
      <Text style={{fontSize:25, color: 'green', textAlign: 'center', marginBottom: 30}} >JSON server Api integration</Text>

      {
        data.length !==0 ?
          data.map((item) =>
          (<View><Text style={styles.text} >{item.name}</Text></View>))
        : ''
      }

    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize:20, 
    marginBottom: 20,
  },


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
