import React from 'react';

import { useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';

import UseEffectComponent1 from './components/UseEffectComponent1';

/**
 * 1) Life Cycle with useEffect (component: UseEffectComponent1)
 * 
*/


const App = () => {

  return(
    <View>

      <UseEffectComponent1/>

      

    </View>
  );
};

const styles = StyleSheet.create({
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
