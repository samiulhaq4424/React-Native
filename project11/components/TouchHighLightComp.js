/* eslint-disable */

import {StyleSheet,Text, TouchableHighlight, View} from 'react-native';

const TouchHighLightComp = () => {
  
  return (
    <View style={styles.main}>
      <Text style={{fontSize:30, color: 'green', textAlign: 'center'}}>TouchableHighlight</Text>

      {/* apply style to Text for button and not to TouchableHighlight */}
      <TouchableHighlight> 
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight> 
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight> 
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight> 
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },

  button:{
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    //for shadow around the button, we use elevation in android, and for shadow color use shadowColor
    shadowColor: 'red',
    elevation: 15, // Shadow for Android
    shadowOpacity: 0.8, //defines how transparent or opaque the shadow will be, with values ranging from 0 (completely transparent) to 1 (completely opaque).
  },

  success:{
    backgroundColor: 'green',
  },

  primary:{
    backgroundColor: 'blue',
  },

  warning:{
    backgroundColor: 'gold',
  },

  error:{
    backgroundColor: 'red',
  },
});

export default TouchHighLightComp;
