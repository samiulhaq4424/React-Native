/* eslint-disable */
import { useState } from 'react';

import {StyleSheet,Text, TouchableOpacity, View} from 'react-native';

const RadioButton = () => {
  
  const [selectedRadio, setselectedRadio] = useState(1);

  return (
    <View style={styles.main}>      

      {/* for radio button use TouchableOpacity as isme kaam less krna hoga and not TouchableHighlight as isme jyada kaam karna parega */}
      <Text style={styles.text}>Radio Button</Text>
      

      <TouchableOpacity onPress={()=>setselectedRadio(1)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {
              selectedRadio === 1 ? <View style={styles.radioBgc}></View> : ''
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>setselectedRadio(2)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {
              selectedRadio === 2 ? <View style={styles.radioBgc}></View> : ''
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  main:{
    flex: 1,
    alignItems: 'center', //centers the content horizontally (along the cross-axis)
    justifyContent: 'center', //centers the content vertically (along the main axis)
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
    backgroundColor: 'skyblue',
    height: 30,
    width: 30,
    borderRadius: 18,
    margin: 3 // adjust to put the circle in the center; manually karna hoga
  },
});

export default RadioButton;
