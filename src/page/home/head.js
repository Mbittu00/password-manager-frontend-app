import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import {useState,useEffect,useContext}from'react'
import context from'../../../context/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Head() {
  let {user,setAccounts,showAccount,setToken}=useContext(context)
  let [modal,setModal]=useState(false)
  console.log(user)
  let filter=(e)=>{
    if (e=='') {
      setAccounts(showAccount)
    }else{
      setAccounts((n)=>n.filter((p)=>(
    p.app == e)))
  /*  console.log(showAccount.filter((p)=>(
    p.app == e)))*/
    }
  }
  let clear=async()=>{
    await AsyncStorage.setItem('token','')
    setToken('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.name}>Hello {user.username}👋</Text>
        <TouchableOpacity onLongPress={clear}>
        <Image
          source={{
            uri: user.profileImg,
          }}
          style={styles.dp}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <EvilIcons name="search" size={28} color="lightgray" />
        <TextInput
          style={styles.search}
          placeholder="Search For Account,Tags..."
          onChangeText={filter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profile: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'90%',
    alignSelf:'center',
    height:50
  },
  name: {
 fontSize:18,
 fontWeight:'300'
  },
  dp: {
    width:40,
    height:40
  },
  input: {
    marginTop:10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#f0f9fc",
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2,
  },
  search: {
    width: "80%",
    height: 40,
  },
});
