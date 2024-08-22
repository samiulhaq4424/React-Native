import React from 'react';
import { useState } from 'react'; //importing useState
import {View, Text, Button} from 'react-native';

import User from './components/User';

const App = () => {
  const [name, setName] = useState('Samiul');
  const updateName= ()=>{
    setName('Sam');
  }

  let childname= 'Baagi';
  let age = 3;
  return(
    <View>
      <Text style={{fontSize: 30, borderBottomWidth: 1}}>State in React-Native</Text>
      <Text style={{fontSize: 20, color: 'blue'}}>My name is: {name}</Text>
      <Button title='Update Name' onPress={updateName}></Button>
      <Button title='Update Name using Props' onPress={()=>setName('Peter')}></Button>
      
      {/* passing props */}
      <User childName={childname} childAge={age}/>
    </View>
  );
};

export default App;
