/* eslint-disable */


// https://jsonplaceholder.typicode.com/

import { useEffect, useState } from 'react';

import {
  Text,
  View,
} from 'react-native';


const ApiCall = () => {
  
  const [data, setData] = useState('');

  const getAPIdata = async () =>{ //api call
    
    const url ='https://jsonplaceholder.typicode.com/posts/1'; 
    const result = await fetch(url); // Fetch the data from the API; say api me data bhot jyada ha say 600Kb or 1Mb, usme load hone me time lag sakta ha, so woh humare application ko slow na ho, wo isse aage jane deta ha aur jab ye api call hogi tab isse display kardega so we use 'await' so also using 'async' function 

    const dataObjFetched = await result.json(); // Parse the result as JSON i.e  resolving to a JavaScript object (or array) representing the JSON data.

    // console.warn(dataObjFetched);
    setData(dataObjFetched);


  }

  // Using useEffect to call getAPIdata when the component mounts
  useEffect(()=>{
    /*
        getAPIdata() function is called inside the useEffect hook to fetch data from the API when the component mounts. 
        Without useEffect, if you call getAPIdata directly in the component, it would get called on every render, which is inefficient and usually undesirable. useEffect ensures that the API call is made only once when the component first loads.
    */
    getAPIdata();
  },[]);

  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 20}} >API Call</Text>
      {
         data ? 
         <View>
           <Text style={{fontSize: 22, marginBottom: 10}}>userId: {data.userId}</Text>
           <Text style={{fontSize: 22, marginBottom: 10}}>Id: {data.id}</Text>
           <Text style={{fontSize: 22, marginBottom: 10}}>Title: {data.title}</Text>
           <Text style={{fontSize: 22, marginBottom: 10}}>Body: {data.body}</Text>
         </View> : ''
      }
    </View>
  );
};

export default ApiCall;
