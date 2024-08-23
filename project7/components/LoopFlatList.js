/* eslint-disable */

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const users = [
  { id: 1, name: 'Samiul', email: 'abc@test.com' },
  { id: 2, name: 'Peter', email: 'xyz@test.com'  },
  { id: 3, name: 'Bruce', email: 'pqr@test.com'  },
  { id: 4, name: 'Bill', email: 'uvw@test.com'  },
];


const UserData = ({itemName, itemEmail}) => {
  return(
    <View style={styles.box}>
      <Text style={styles.item}>{itemName}</Text>
      <Text style={styles.item}>{itemEmail}</Text>
    </View>
  );
}


const LoopFlatList = () => {
    return(
      <View>
        <Text style={{fontSize: 25}}>Component in Loop with FlatList</Text>

        <FlatList
          data = {users}
          renderItem = {({item}) => <UserData itemName={item.name} itemEmail={item.email}/> } //passing as props
        />

      </View>
    )
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    color: 'orange',
    margin: 2,
    flex: 1,
    backgroundColor: 'green',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 5,
  },
});

export default LoopFlatList;