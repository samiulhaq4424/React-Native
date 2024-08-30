
import { useEffect, useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput
} from 'react-native';


const SearchApi = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // GET /posts?q=internet this the format for delete got from https://github.com/typicode/json-server/tree/v0
  useEffect(() => {
    const searchUser = async () => {
      if (query) {  // Only search if there's a query
        const url = `http://10.0.2.2:3000/users?q=${query}`;
        const result = await fetch(url);
        const dataFetched = await result.json();

        if (dataFetched) {
          setData(dataFetched);
        } 
      } else {
        setData([]); // Reset data when query is cleared
      }
    };

    searchUser();
  }, [query]);  // Trigger the effect whenever the query changes

  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{fontSize: 40, color: 'green', textAlign: 'center'}}>Search with API</Text>
      <TextInput
        style={{borderColor: 'skyblue', borderWidth: 1, margin: 20, fontSize: 20}}
        placeholder='Search'
        onChangeText={setQuery}
      />
      {
        data.length !==0 ?
          data.map((item)=>(
            <View key={item.id} style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{fontSize: 18, color: 'black'}}>{item.name}</Text>
              <Text style={{fontSize: 18, color: 'black'}}>{item.age}</Text>
              <Text style={{fontSize: 18, color: 'black'}}>{item.email}</Text>
            </View>
          ))
        : <Text style={{fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20,}}>Result not found!!!!!</Text>
      }

    </ScrollView>
  );
};

export default SearchApi;

