import { useEffect, useState } from 'react';

import {Text, View, Button} from 'react-native';

const UseEffectComponent1 = () =>{

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.warn('useEffect rendered !!!!');
  }, []); // Initial Render (Component Did Mount), The useEffect hook runs after the component's first render. If you pass an empty dependency array [], the effect runs only once, similar to 'componentDidMount' which is a is a lifecycle method in React class components.. If you don.t put any dependecy then it will be 'render' after every 'state', 'prop' update.

  return (
    <View>
      <Text style={{fontSize: 25, color: 'green'}}>Life Cycle with useEffect:</Text>
      <Text style={{fontSize: 22}}>Count value: {count}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)} />
      <Button title='Clear Count' onPress={()=>setCount(0)} />
    </View>
  );
};

export default UseEffectComponent1;