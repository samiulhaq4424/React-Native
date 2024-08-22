import {View, Text} from 'react-native';

//component CollegeData
const CollegeData = ()=>{
  return(
    <View>
      <Text style={{fontSize: 20}}>UserId: 778</Text>
      <Text style={{fontSize: 20}}>Department: CSE</Text>
      <Text style={{fontSize: 20, borderBottomWidth: 1}}>CGPA: 8.35</Text>
    </View>
  );
}

export default CollegeData;

// borderBottomWidth --> Thickness of the line