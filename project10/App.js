/* eslint-disable */

import React from 'react';

import {StyleSheet, View} from 'react-native';

/**
 * 1) Responsive Layout with Flex
*/

{/* <Text style={{fontSize: 30, color: 'green'}}>Responsive UI with Flex</Text> */}

/*
    ///say ek View pe flex:1, 50% screen ye wala body lelega
    ///dusra View pe flex:1, 50% screen ye wala body lelega
    eg1)
    <View>
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
    </View>

    eg2)
    <View>
      <View>say flex:1 </View> --> ye pura body lelega bas utna space chor dega jitna niche wala text ko chaiye for fontSize:100
      <View>say Text with fontSize:100 </View>
    </View>

    eg3)
    <View>
      <View>say flex:2 </View> --> Takes 2/3th of the screen (66.66%)
      <View>say flex:1 </View> --> Takes 1/3th of the screen (33.33%)
    </View>

    eg4)
    <View>
      <View>say flex:3 </View> --> Takes 3/4th of the screen (75%)
      <View>say flex:1 </View> --> Takes 1/4th of the screen (25%)
    </View>

    Note: seeing above, ratio wise divide kar deta ha
*/
const App = () => {
  
  return (
    <View style={styles.mainBox}>
      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>



    </View>
  );
};

const styles = StyleSheet.create({
  mainBox:{
    flex: 1,
  },


  box1:{
    flex: 2, 
    backgroundColor: 'red',
    flexDirection: 'row',
    // flexDirection: 'column', //see what happen if you uncomment it
  },
  box2:{
    flex: 1, 
    backgroundColor: 'green',
  },
  box3:{
    flex: 1, 
    backgroundColor: 'blue'
  },


  innerBox1:{
    flex: 1, 
    backgroundColor: 'skyblue',
    margin: 10,
  },
  innerBox2:{
    flex: 1, 
    backgroundColor: 'blue',
    margin: 10,
  },
  innerBox3:{
    flex: 1, 
    backgroundColor: 'orange',
    margin: 10,
  },
});

export default App;
