/* eslint-disable */

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

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

const Grid = () => {
  return (
    // putting felx:1 to View, see what happens if you remove it
    <View style={{flex: 1}}>

      <Text style={{fontSize: 25}}>Grid with Dynamic Data</Text>

      {/* making grid, see what happen if you remove flex property*/}
      <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {
            users.map(
              (item) =>(
                <Text key={item.id} style={styles.item}>{item.name}</Text>
              ))
        }
      </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  item : {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    paddig: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Grid;
