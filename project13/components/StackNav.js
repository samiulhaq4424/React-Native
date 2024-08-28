/* eslint-disable */

import {
  Text,
  View, 
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Create a stack navigator


function StackNav() {

  return (
    /**
       * NavigationContainer: This is the top-level container that manages the navigation tree and state.
       * createNativeStackNavigator: This creates a stack navigator which allows you to push and pop screens.
       * Stack.Navigator: This defines the stack and the initial route.
       * Stack.Screen: This defines each screen in the stack.
    */

    
    <NavigationContainer>
      {/* 'name' prop of the Stack.Screen component is used to define the route name for that screen. This name serves as an identifier that you use to navigate between screens. */}

      {/* works like a stack: 1st screen is 'Home', 2nd screen is 'Login' then 3rd screen is 'Details' */}
      <Stack.Navigator>
        <Stack.Screen name='Log In' component={Login} />
        <Stack.Screen name='Home' component={Home} />
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


const Home = (props)=> { //Home Component; 
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


export default StackNav;
