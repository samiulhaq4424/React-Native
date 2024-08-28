/* eslint-disable */

import {
  Text,
  View, 
  Button,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Create a stack navigator


function StackNavStyle() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ //for styling of entire stack screens
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
                fontSize: 25,
            },
          }} >
        <Stack.Screen name='Log In' component={Login} 
          options={{ //for styling of this screen
            title: 'User Login', //will change 'name' to this title but name will be used to navigate
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontSize: 40,
            },
        }}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// here props is passed to Home component by Stack.Screen
const Login = (props)=> { //LogIn component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>
      <Text style={{fontSize: 30}}>Log In Screen</Text>
      <Button title='Go To Home' onPress={()=> props.navigation.navigate('Home')}/>
    </View>
  );
}

const Home = (props)=> { //Home Component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Button title='Go To Details' onPress={()=> props.navigation.navigate('Details')}/>
    </View>
  );
}

const Details = (props)=> { //Details component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'coral'}}>
      <Text style={{fontSize: 30}}>Details Screen</Text>
      <Button title='Go To Log In' onPress={()=> props.navigation.navigate('Log In')}/>
    </View>
  );
}

export default StackNavStyle;
