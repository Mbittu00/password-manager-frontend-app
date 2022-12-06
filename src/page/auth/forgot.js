import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import Loading from'../../../component/load'
export default function App({navigation}) {
  let [got, setGot] = useState(false);
  let [load, setLoad] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassrord] = useState("");
  let [otp, setOtp] = useState("");
  let send = async () => {
    let req = "https://pm-backend-gamma.vercel.app/api/user/request";
    let can = "https://pm-backend-gamma.vercel.app/api/user/change";
    setLoad(true)
    if (got) {
  let change=await axios.post(can,{username,otp,password})
  log()
    } else {
      let { data } = await axios.post(req, { username });
      setLoad(false)
    //  console.log(data);
    setGot(true)
    }
  };
  let log=()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
    {!load?
    <>
      <Text style={styles.page}>Forgot Password</Text>
      <View style={styles.username}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      {got ? (
        <View style={{width:'100%',alignItems:'center'}}>
          <View style={styles.otp}>
            <TextInput style={styles.otpInput} 
            placeholder="otp" onChangeText={setOtp}/>
          </View>
          <View style={styles.password}>
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput style={styles.input}
            placeholder="password" onChangeText={setPassrord}/>
          </View>
        </View>
      ) : (
        ""
      )}
      <TouchableOpacity onPress={send} style={styles.btn}>
        <Text>send</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn} onPress={log}>
        <Text>login</Text>
      </TouchableOpacity>
    </>
   :<Loading/> }
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "",
    marginTop: StatusBar.currentHeight,
  },
  username: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 20,
    marginTop: 50,
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
  },
  page: {
    fontWeight: "200",
    fontSize: 25,
    marginTop: 50,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    width: "80%",
  },
  otp: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 20,
    marginTop: 20,
    
  },
  password: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  btn: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginTop: 40,
    height: 40,
    borderRadius: 20,
  },
  otpInput: {
    height: 40,
    textAlign: "center",
    width: "100%",
  },loginBtn:{
    marginTop:5
  }
});
