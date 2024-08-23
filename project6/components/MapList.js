/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const users = [
  { id: 1, name: 'Samiul' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Bruce' },
  { id: 4, name: 'Bill' },
  { id: 5, name: 'Harry' },
  { id: 6, name: 'Won' },
  { id: 7, name: 'Hermione' },
  { id: 8, name: 'Iron Man' },
  { id: 9, name: 'Hulk' },
  { id: 10, name: 'Spider Man' },
  { id: 11, name: 'Captain America' },
  { id: 12, name: 'Super Man' },
  { id: 13, name: 'Bat Man' },
  { id: 14, name: 'Tony' },
  { id: 15, name: 'x' },
  { id: 16, name: 'y' },
  { id: 17, name: 'z' },
  { id: 18, name: 'a' },
  { id: 19, name: 'b' },
  { id: 20, name: 'c' },
];


const MapList = () =>{
  return (
    <View style={{ flex: 1 }}> 

      <Text style={{fontSize: 25, marginTop: 5, borderTopWidth: 2}}>List with Map Function (custom)</Text>
      {/* with flatList ScrollView default rahta ha, but with map ScrollView khud dalo*/}
      <ScrollView> 
      {
        users.map((item) => (
          <Text 
          key = {item.id}
          style={styles.item}>{item.name}</Text>
      ))}
      </ScrollView>
      
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
    marginBottom: 20,
  },
});


export default MapList;
