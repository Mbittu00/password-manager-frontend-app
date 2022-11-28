import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from'./src/page/home/home'
import Login from'./src/page/auth/login'
import Reg from'./src/page/auth/register'
import Preview from'./src/page/preview/preview'
import Add from'./src/page/add/add'
import context from "./context/context";
import {useContext}from'react'
export default function Route({log}) {
  let {token}=useContext(context)
  return (
<>
{
  token?(
        <Stack.Navigator
        screenOptions={{
    headerShown: false
  }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
  ):(
        <Stack.Navigator
        screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Reg} />
      </Stack.Navigator>
  )
}
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    