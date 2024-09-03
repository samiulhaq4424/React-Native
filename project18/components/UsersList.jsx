/* eslint-disable */

import { View, Text, StyleSheet } from 'react-native';

const UsersList = () => {
  
  return (
    <View>
      <Text style={styles.headerText}>User List Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30, 
    textAlign: 'center',
  },
})

export default UsersList;

