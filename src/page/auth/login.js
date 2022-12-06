import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar } from 'react-native';
import { AntDesign ,FontAwesome} from '@expo/vector-icons';
import axios from'axios'
import {useState,useEffect,useContext}from'react'
import context from'../../../context/context'
import Loading from'../../../component/load'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App({navigation}) {
  let {setToken,setUser}=useContext(context)
  let [username,setUsername]=useState('')
  let [password,setPasword]=useState('')
  let [error,setError]=useState('')
  let [load,setLoad]=useState(false)
  let reg=()=>{
    navigation.navigate('Register')
  }
  let login=async()=>{
let uri='https://pm-backend-gamma.vercel.app/api/user/login'
if (username==''||password=='') {
  setError('enter your credential')
}else{
  setLoad(true)
  try {
  let {data}= await axios.post(uri,{username,password})
  setToken(data.token)
  setUser(data)
  await AsyncStorage.setItem('token',data.token)
  } catch (e) {
    console.log(e)
    setLoad(false)
    setError('wrong credential')
  }
}
  }
  let forgot=()=>{
    navigation.navigate('Forgot')
  }
  return (
    <View style={styles.container}>
    {!load?<>
<Text style={styles.page}>Login</Text>
<View style={styles.holder}>
<View style={styles.inputHolder}>
 <AntDesign name="user" size={24} color="black" />
<TextInput style={styles.input}
placeholder='Enter your username'
onChangeText={setUsername}/>
</View>
<View style={styles.inputHolder}>
<FontAwesome name="lock" size={24} color="black" />
<TextInput style={styles.input}
placeholder='Enter your Password'
secureTextEntry={true}
onChangeText={setPasword}/>
</View>
</View>
<Text style={styles.error}>{error}</Text>
<View style={styles.btn}>
<TouchableOpacity style={styles.loginBtn} onPress={login}>
<Text>Login</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.registerBtn} onPress={reg}>
<Text>register</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.forgot} onPress={forgot}>
<Text style={styles.ftext}>forgot Password</Text>
</TouchableOpacity>
</View>
</>:<Loading/>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight
  },holder:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },input:{
   width:'80%',
   height:40,
   paddingLeft:5
  },inputHolder:{
    flexDirection:'row',
    borderWidth:1,
    marginBottom:10,
    alignItems:'center',
    paddingLeft:10,
    borderRadius:20
  },page:{
    fontSize:26,
    fontWeight:'300',
    marginBottom:80
  },loginBtn:{
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    width:130,
    height:40,
    borderRadius:20,
    marginTop:20
  },btn:{
    alignItems:'center'
  },registerBtn:{
    marginTop:5
  },error:{
    marginTop:5,
    color:'red',
    textTransform:'capitalize'
  },forgot:{
    marginTop:5,
  },ftext:{
    textDecorationLine:'underline'
  }
});
    