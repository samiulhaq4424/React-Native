/* eslint-disable */

import { useEffect, useState } from 'react';

import {
  Text,
  View,
  FlatList,
} from 'react-native';


/**
  We don't need to wrap a FlatList inside a ScrollView in React Native. The FlatList component already includes built-in scroll functionality, and it is optimized for handling large lists of data by only rendering items that are currently visible on the screen.
*/


const FlatListApi = () => {
  
  const [data, setData] = useState('');

  const getAPIdata = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url);
    const dataObjFetched = await result.json();
    setData(dataObjFetched);
  }


  useEffect(()=>{
    getAPIdata();
  },[]);

  return (
    
    <View>

     <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 20}}>FlatList with API data</Text>

     {
        data.length !==0 ?
          <FlatList
            data = {data}
            renderItem = {({item}) => 
              <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
                <Text style={{fontSize: 22, marginBottom: 10, backgroundColor: '#ddd'}}>Id: {item.id}</Text>
                <Text style={{fontSize: 22, marginBottom: 10}}>userId: {item.userId}</Text>
                <Text style={{fontSize: 22, marginBottom: 10}}>Title: {item.title}</Text>
                <Text style={{fontSize: 22, marginBottom: 10}}>Body: {item.body}</Text>
              </View>
            }
          />
          : ''
     }
      
    </View>
  );
};

export default FlatListApi;

