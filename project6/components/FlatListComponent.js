/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {Text, View, StyleSheet, FlatList} from 'react-native';

const users = [
  { id: 1, name: 'Samiul' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Bruce' },
  { id: 4, name: 'Bill' },
];

const FlatListComponent = () => {

  return (
    <View>
      <Text style={{fontSize: 30}}>List with Flat List</Text>

      <FlatList
        data = {users} //"data" takes an "array" of items to be rendered
        renderItem = {({item}) => <Text style={styles.item}>{item.name}</Text>} //renderItem: A function that takes an item form from the data array and returns a React element to render.
        keyExtractor = {item => item.id} //keyExtractor: A function that returns a unique key for each item in the list. This is required to ensure that each item is properly identified for efficient updates.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item : {
    fontSize: 20,
    padding: 5,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5,
  },
});

export default FlatListComponent;
