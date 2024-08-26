/* eslint-disable */

import { useState } from "react";

import {Text, View, Button, StyleSheet, ActivityIndicator} from 'react-native';


const ActivityIndic = () =>{

  const [show, setShow] = useState(false);

  const displayLoader = () => { // now if we press the button below, activity indicator will appear for 3s then it will disappear
    setShow(true);

    setTimeout(() =>{
      setShow(false);
    }, 3000);

    //say, api call horha hai taking 3s, therefore tab tak loader dikhate raho
  }

  return (

    <View style={styles.main} >
      <Text style={{fontSize: 40, marginBottom: 60}} >Activity Indicator</Text>

      {/* for ActivityIndicator, if animating = {false} then activity indicator show nahi hoga AND for IOS-> size can be 'small', 'medium' or 'large' but in ANDROID-> size can be numbers and also 'small', 'medium' or 'large' */}

      <ActivityIndicator size={100} color= 'gold' animating= {show} />
      <Button title= 'Show Loader' onPress= {displayLoader} />

      {/* other way:
      
            {
                show ? <ActivityIndicator size={100} color= 'gold' animating= {show} /> : ''
                <Button title= 'Show Loader' onPress= {displayLoader} />
            }
      */}

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})


export default ActivityIndic;