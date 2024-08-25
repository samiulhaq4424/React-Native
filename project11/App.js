/* eslint-disable */

import React from 'react';
import {StyleSheet,Text, TouchableHighlight, View} from 'react-native';

/**
 * 1) Style with Button (Note: default <Button> bhot jyada styles ko support nahi karta), so we have alternatives i.e. TouchableHighlight & TouchableOpacity (component: TouchHighLightComp)
 * 2) Radio Button (in React-Native: radio-button nai hota using import)
*/

import TouchHighLightComp from './components/TouchHighLightComp';

const App = () => {
  
  return (
    <View style={styles.main}>
      
      {/* <TouchHighLightComp/> */}

      {/* for radio button use TouchableOpacity as isme kaam less krna hoga and not TouchableHighlight as isme jyada kaam karna parega */}

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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
