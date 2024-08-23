/* eslint-disable */

import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';

const users = [
  {id: 1, name: 'Samiul',
    data: ['Java', 'C++', 'Js'], //if you are taking nested array inside an array, then keyword data hi rakhna hoga
  },
  {id: 2, name: 'Bill', data: ['Python', 'C', 'HTML'],},
  {id: 3, name: 'Peter', data: ['Ruby', 'Angular', 'CSS'],},
  {id: 4, name: 'Bruce', data: ['PHP', 'Tailwind', 'React'],},
];

const SectionListComponent = () => {
  
  return (

    <View>

      <Text style={{fontSize: 25}}>Section List in React-Native</Text>
      
      <SectionList 
        sections = {users} // Array of sections with data array
        keyExtractor={(item, index) => item + index} // Unique key for each item; keyExtractor function receives two arguments: 1) item: The current item from the list 2)index: The index of the current item in the list.
        renderItem = {({item}) => <Text style={styles.item}>{item}</Text>} // Render each item in nested array i.e. data
        renderSectionHeader = {({section:{name}}) => <Text style={styles.header}>{name}</Text>} // Render the section header; here I am using "name"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'orange',
    margin: 2,
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 2,
    flex: 1,
    backgroundColor: 'blue',
    textAlign: 'center',
  },
});


export default SectionListComponent;
