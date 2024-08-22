import React from 'react';

import {
  View,
  Text,
} from 'react-native';

//Note: for components name, start first letter as "capital" letter
import CollegeData from './components/CollegeData';
import ButtonEvent from './components/ButtonEvent';

const App = () => {
    return (
      <View>
        <Text style={{fontSize: 30, borderBottomWidth: 1}}>Learning Components</Text>
        <UserData/>
        <CollegeData/>
        <ButtonEvent/>
      </View>
  );
};

//using UserData as components name
const UserData = ()=>{
  return(
    <View>
      <Text style={{fontSize: 20}}>Name: Samiul</Text>
      <Text style={{fontSize: 20}}>Age: 27</Text>
      <Text style={{fontSize: 20}}>Email: abc@gmail.com</Text>
    </View>
  );
}

export default App;
