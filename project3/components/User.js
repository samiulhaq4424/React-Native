import {View, Text} from 'react-native';

const User = ({childName, childAge}) =>{
  return(
    <View style={{backgroundColor: 'green', padding: 5}}> 
      <Text style={{fontSize: 20}}>Child Component :-</Text>
      <Text style={{fontSize: 20}}>Prop name is: {childName}</Text>
      <Text style={{fontSize: 20}}>Prop age is: {childAge}</Text>
    </View>
  );
};

export default User;