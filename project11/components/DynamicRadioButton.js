/* eslint-disable */

import { useState } from 'react';

import {StyleSheet,Text, TouchableOpacity, View} from 'react-native';


const DynamicRadioButton = () => {
  
  const skills = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'C++'},
    {id: 3, name: 'React'},
    {id: 4, name: 'SQLLL'},
  ];

  const [selectedRadio, setselectedRadio] = useState(1);


  return (
    <View style={styles.main}>

      { //index: index of array; item is {name,id}
        skills.map((item, index)=> (
          <TouchableOpacity key={index} onPress={()=>setselectedRadio(item.id)}> 
            <View style={styles.wrapper}>
              <View style={styles.radio}>
                {
                  selectedRadio === item.id ? <View style={styles.radioBgc}></View> : ''
                }
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))
      }

    </View>
  );
};

const styles = StyleSheet.create({

  main:{
    flex: 1,
    // alignItems: 'center', //centers the content horizontally (along the cross-axis)  //using this buttons are not aligned in a staright vertical line
    justifyContent: 'center', //centers the content vertically (along the main axis)
    marginLeft : 40, //doing it manually checking center tak konse value pe jayega
  },

  text:{
    fontSize:30, 
    color: 'green', 
    textAlign: 'center', 
    marginBottom: 50,
  },

  radio:{
    height: 40,
    width: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20, //for circle half of width
    margin: 10,
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  radioText:{
    fontSize: 20,
    fontWeight: '800',
    color: 'orange'
  },

  radioBgc:{
    //for inner radio button define this
    backgroundColor: 'green',
    height: 30,
    width: 30,
    borderRadius: 18,
    margin: 3 // adjust to put the circle in the center; manually karna hoga
  },
});

export default DynamicRadioButton;
