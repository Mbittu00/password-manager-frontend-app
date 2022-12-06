import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import context from "../../../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../../component/load";
export default function App({ navigation }) {
  let { setToken, setUser } = useContext(context);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPasword] = useState("");
  let [error, setError] = useState("");
  let [load, setLoad] = useState(false);
  let reg = () => {
    navigation.navigate("Login");
  };

  let register = async () => {
    let uri =
      "https://pm-backend-gamma.vercel.app/api/user/register";
    if (username == "" && password == "" && email=="") {
      setError("enter your credential");
    } else {
      setLoad(true);
      try {
        let { data } = await axios.post(uri, { username, password ,email});
        setToken(data.token);
        setUser(data);
        await AsyncStorage.setItem("token", data.token);
      } catch (e) {
        console.log(e);
        setLoad(false);
        setError('username already taken')
      }
    }
  };
  return (
    <View style={styles.container}>
      {/*   <View style={{ height: 80, width: "100%", marginBottom: 10 }}>
      </View>*/}
      {!load ? (
        <>
          <Text style={styles.page}>Register</Text>
          <View style={styles.main}>
            <View style={styles.inputHolder}>
              <AntDesign name="user" size={24} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputHolder}>
              <Foundation name="mail" size={24} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputHolder}>
              <FontAwesome name="lock" size={24} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPasword}
              />
            </View>
          </View>
<Text style={styles.error}>{error}</Text>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.regBtn} onPress={register}>
              <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logBtn} onPress={reg}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Loading />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  sview: {
    height: 80,
  },
  inputHolder: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 20,
    paddingLeft: 10,
  },
  main: {},
  input: {
    width: "80%",
    height: 45,
    paddingLeft: 5,
  },
  regBtn: {
    borderWidth: 1,
    borderColor: "black",
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  logBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    fontSize: 26,
    fontWeight: "300",
    marginBottom: 80,
  },
  avatar: {
    height: 80,
    width: 80,
    marginLeft: 5,
    marginRight: 5,
  },error:{
    marginTop:5,
    color:'red',
    textTransform:'capitalize'
  }
});
