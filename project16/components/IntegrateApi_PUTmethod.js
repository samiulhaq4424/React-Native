
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


const IntegrateApi_PUTmethod = () => {
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

  const deleteUser = async (id) =>{
    const url = 'http://10.0.2.2:3000/users';

    console.error(`${url}/${id}`); //just to see
    const result = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    }); 
    const dataFetched = await result.json();
    if(dataFetched){ //or can use 'result' in condition
      getApiData(); //to refresh on the screen, so re-render will occur again
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
        <UpdateModal 
          selectedUser={selectedUser} 
          setShowModal={setShowModal}
          getApiData={getApiData} //passing getApiData() function as props
        />
      </Modal>

    </ScrollView>
  );
};

const UpdateModal = ({selectedUser, setShowModal, getApiData})=>{ //component
  // console.error(selectedUser); //just to see the person's object
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    if(selectedUser){
      setName(selectedUser.name);
      setAge(selectedUser.age.toString()); //converting to string as input fields required string format
      setEmail(selectedUser.email);
    }
  },[selectedUser]);

  const updateUser = async () =>{ //to update to server
    const url = 'http://10.0.2.2:3000/users';
    const id = selectedUser.id;
    const result = await fetch(`${url}/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name,age,email})
    }); 

    //to see updated data
    const dataFetched = await result.json();
    if(dataFetched){
      console.warn(dataFetched);
      getApiData(); //calling again to see the effect on the screen
      setName('');
      setAge('');
      setEmail('');
      setShowModal(false);
    }
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={{fontSize: 20}}>Name:</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={(text)=>setName(text)}
        />

        <Text style={{fontSize: 20}}>Age:</Text>
        <TextInput 
          style={styles.input} 
          value={age}
          onChangeText={(text)=>setAge(text)}
        />

        <Text style={{fontSize: 20}}>Email:</Text>
        <TextInput 
          style={styles.input} 
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />

        <View style={{marginBottom: 10}}>
          <Button title='Update' onPress={updateUser} />
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
    shadowColor: '#000', 
    shadowOpacity: 0.80, 
    elevation: 5, 
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    fontSize: 18,
  },
})

export default IntegrateApi_PUTmethod;

