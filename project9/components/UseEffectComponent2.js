import { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';


const UseEffectComponent2 = () => {

  const[count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(()=>{
    console.warn('do some animation (count useEffect hai) !!!!');
  },[count]); //works as ComponentDidUpdate; when we pass a dependency array, it will only run the effect when the values in the array change i.e. count and on first/initial render

  useEffect(()=>{
    console.warn('call some api (data useEffect hai) !!!!');
  },[data]); //works as ComponentDidUpdate; when we pass a dependency array, it will only run the effect when the values in the array change i.e. data and on first/initial render

  return(
    <View>

      <Text style={styles.textStyle}>useEffect hook as ComponentDidUpdate:</Text>

      <Text style={{fontSize: 22}}>Count value: {count}</Text>
      {/* when we press below button, first useEffect will be render only once initially then it will not render/or called unless count is not updated */}
      <Button title='Update counter' onPress={()=>setCount(count+1)} />


      <Text style={{fontSize: 22}}>Data value: {data}</Text>
      <Button title='Update data value' onPress={()=>setData(data+1)} />

      {/* Users component; using to pass props and see effect of useEffect when it will render */}
      <Users data={data} count={count} /> 

    </View>
  );
};


const Users = (props)=>{ //Working as a component used above

  useEffect(()=>{
    console.error('run this code when "count" prop is updated')
  },[props.count]);

  useEffect(()=>{
    console.error('run this code when "data" prop is updated')
  },[props.data]);

  return(
    <View>

      <Text style={{fontSize: 22, color: 'orange'}}>User Component</Text>
      <Text style={{fontSize: 22}}>Count= {props.count}</Text>

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

export default UseEffectComponent2;
