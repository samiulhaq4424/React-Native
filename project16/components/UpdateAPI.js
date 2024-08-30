
import { useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Modal,
  TextInput
} from 'react-native';

//Note: Here, only data is passed to model when update is pressed but in server, no changes will be seen
const UpdateAPI = () => {
  const [data, setData] = useState([]); //array of objects

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const getApiData = async () =>{
    const url = 'http://10.0.2.2:3000/users';
    const result = await fetch(url); 
    const dataFetched = await result.json();
    // console.warn(dataFetched); //just to see the object

    if(dataFetched){ //or can use 'result' in condition
      setData(dataFetched);
    }
  }

  useEffect(()=>{
    getApiData(); //to call the getApiData function
  },[]);
  

  const updateUser = (item)=>{
    setShowModal(true);
    setSelectedUser(item);
  }

  return (
    <ScrollView style={{flex:1}}>

      <View style={styles.wrapper}>
        <View style={{ flex: 2}}><Text style={{fontSize: 20}}>Name</Text></View>
        <View style={{ flex: 2 }}><Text style={{fontSize: 20}}>Age</Text></View>
        <View style={{ flex: 2 }}><Text style={{fontSize: 20}}>Operations</Text></View>
      </View>

      {
        data.length !== 0 ?
        data.map((item) => (
          <View style={styles.wrapper} key={item.id}>
            <View style={{ flex: 2 }}><Text>{item.name}</Text></View>
            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
            <View style={styles.buttonContainer}>
              {/* passing id so we can delete that particular person's object */}
              <Button title='delete' onPress={()=>deleteUser(item.id)} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title='update' onPress={()=>updateUser(item)} />
            </View>
          </View>
        ))
        : null
      }


      <Modal visible={showModal} transparent={true}>
        <UpdateModal selectedUser={selectedUser} setShowModal={setShowModal}/>
      </Modal>

    </ScrollView>
  );
};

const UpdateModal = ({selectedUser, setShowModal})=>{ //component
  console.warn(selectedUser); //just to see the person's object
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(()=>{
    if(selectedUser){
      setName(selectedUser.name);
      setAge(selectedUser.age.toString()); //converting to string as input fields required string format
      setEmail(selectedUser.email);
    }
  },[selectedUser]);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={{fontSize: 20}}>Name:</Text>
        <TextInput style={styles.input} value={name}/>

        <Text style={{fontSize: 20}}>Age:</Text>
        <TextInput style={styles.input} value={age}/>

        <Text style={{fontSize: 20}}>Email:</Text>
        <TextInput style={styles.input} value={email}/>
        <View style={{marginBottom: 10}}>
          <Button title='Update'/>
        </View>
        <Button title='Close' onPress={()=>setShowModal(false)}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    margin: 5,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,   // Add space around each button
    paddingVertical: 5,    // Add padding above and below to increase size
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView:{
    backgroundColor: '#fff',
    padding: 36,
    borderRadius: 10,
    shadowColor: '#000', //Sets the color of the shadow.
    shadowOpacity: 0.80, //Determines the opacity of the shadow. The value ranges from 0 (completely transparent) to 1 (completely opaque).
    elevation: 5, //It determines how much the shadow appears to be raised above the surface. Higher values create a deeper shadow.
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    fontSize: 18,
  },
})

export default UpdateAPI;

