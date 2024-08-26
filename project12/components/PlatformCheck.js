/* eslint-disable */

import {StyleSheet, Text, View, Platform} from 'react-native';


const PlatformCheck = () => {
  
  return (
    <View>
      <Text style={styles.text} >To check Platform in React-Native:</Text>

      {/* TO check Platform */}
      <Text style={{fontSize: 20, color: 'blue'}} >Platform: {Platform.OS}</Text>

      {
        Platform.OS === 'ios' ?
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View> :
        <View style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      }

      <Text style={styles.check1}>Hiiiiiiiiii</Text>


      {/* to see Platform details */}
      <Text style={styles.check2}>{JSON.stringify(Platform)}</Text>
      {/* to check react-native version */}
      <Text style={styles.check2}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>

    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize:22, 
    color: 'green', 
    marginBottom: 40,
  },

  check1: {
    color: Platform.OS === 'android' ? 'orange' : 'blue',
    fontSize: 30,
    marginBottom: 50,
    marginTop: 50,
  },

  check2: {
    fontSize: 18, 
    borderTopWidth: 2, 
    marginBottom: 8,
  },
});

export default PlatformCheck;
