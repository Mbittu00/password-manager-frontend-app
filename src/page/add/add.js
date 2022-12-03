import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import Modal from "./modal";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import context from "../../../context/context";
import icon from "../../../appIcon.json";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../../component/load";
import AddFun from'./addfun'
const { height, width } = Dimensions.get("window");

export default function Add({ navigation }) {
  let { token, setAccounts, setShowAccount} = useContext(context);
  let [show, setShow] = useState(false);
  let [app, setApp] = useState("instagram");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [local, setLocal] = useState("");
  let [name, setName] = useState("");
  let [number, setPhone] = useState("");
  let [load, setLoad] = useState(false);
  let back = () => {
    navigation.goBack();
  };
  let addAccount = async () => {
 AddFun(name,app,username,password,email,number,local,token,setAccounts,setShowAccount,navigation,setLoad)
  };
  let genPass = () => {
    let cer = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    setPassword("");
    let padd = "";
    for (let i = 0; i < 12; i++) {
      padd += cer.charAt(Math.floor(Math.random() * cer.length));
    }
    setPassword(padd);
  };
  return (
    <>
      {!load ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.main}
          showsVerticalScrollIndicator={false}
        >
          <Modal show={show} setShow={setShow} setApp={setApp} />
          <TouchableOpacity style={styles.one} onPress={back}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <View style={styles.two}>
              <TouchableOpacity onPress={() => setShow(true)}>
                <Image
                  source={{
                    uri: icon.find((n) => n.app == app).icon,
                  }}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <Text style={styles.app}>{app}</Text>
            </View>

            <View style={styles.three}>
              {icon.find((n) => n.app == app).name ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    onChangeText={setName}
                  />
                </View>
              ) : (
                ""
              )}

              {icon.find((n) => n.app == app).username ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter username"
                    onChangeText={setUsername}
                  />
                </View>
              ) : (
                ""
              )}

              {icon.find((n) => n.app == app).email ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    onChangeText={setEmail}
                  />
                </View>
              ) : (
                ""
              )}

              {icon.find((n) => n.app == app).password ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    onChangeText={setPassword}
                    value={password}
                  />
                </View>
              ) : (
                ""
              )}

              {!icon.find((n) => n.app == app).website ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter website/app"
                    onChangeText={setLocal}
                  />
                </View>
              ) : (
                ""
              )}

              {icon.find((n) => n.app == app).phone ? (
                <View style={styles.info}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter phone number"
                    onChangeText={setPhone}
                  />
                </View>
              ) : (
                ""
              )}
            </View>
          </View>
          <View style={styles.btn}>
      {icon.find((n) => n.app == app).password?
      <TouchableOpacity style={styles.gen} onPress={genPass}>
              <Text style={styles.genText}>Genrate Password</Text>
            </TouchableOpacity>:''}

            <TouchableOpacity style={styles.edit} onPress={addAccount}>
              <Text style={styles.editText}>Add Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    // height: height,
    //flex:1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    height: "100%",
    // alignItems: 'center',
  },
  one: {
    backgroundColor: "#c4edf7",
    width: 45,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  two: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  app: {
    textTransform: "capitalize",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "300",
  },
  three: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  info: {
    backgroundColor: "#f0f9fc",
    flexDirection: "column",
    width: "90%",
    marginTop: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  edit: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#97dff1",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 15,
  },
  gen: {
    width: "40%",
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  btn: {
    alignItems: "center",
    marginBottom: 40,
  },
  editText: {
    color: "#97dff1",
  },
  genText: {
    color: "red",
  },
  del: {
    width: "60%",
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  delText: {
    color: "red",
  },
  input: {
    height: 40,
  },
});
