/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Header = () => {
  
  return (
    <View>
      <Text style={styles.headerText}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30, 
    textAlign: 'right', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    backgroundColor: 'skyblue'
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

export default Header;
