/* eslint-disable */

import { useEffect, useState } from 'react';

import {
  ScrollView,
  Text,
  View,
} from 'react-native';



const ListApi = () => {
  
  const [data, setData] = useState('');


  const getAPIdata = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url);

    const dataObjFetched = await result.json();
    console.warn(dataObjFetched);

    setData(dataObjFetched);
  }

  useEffect(()=>{
    getAPIdata();
  }, []);

  return (
    
    <ScrollView>

      <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 20}} >List with API Call</Text>

      {
        data.length !==0 ? 
          data.map((item)=> ( 
            <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
              <Text style={{fontSize: 22, marginBottom: 10, backgroundColor: '#ddd'}}>Id: {item.id}</Text>
              <Text style={{fontSize: 22, marginBottom: 10}}>userId: {item.userId}</Text>
              <Text style={{fontSize: 22, marginBottom: 10}}>Title: {item.title}</Text>
              <Text style={{fontSize: 22, marginBottom: 10}}>Body: {item.body}</Text>
            </View>
          )) : ''
      }

    </ScrollView>
  );
};


export default ListApi;
