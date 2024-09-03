/* eslint-disable */

import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { getUserList } from './redux/action';

const UsersList = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer);

  useEffect(()=>{
    dispatch(getUserList());
  },[]);
  console.error('In component: ', userList);

  return (
    <View>
      <Text style={styles.headerText}>User List Screen</Text>
      {
        userList.length !==0 ?
          userList.map((item) => (
            <Text key={item.id}>{item.name}</Text>
        )) : ''
      }
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

