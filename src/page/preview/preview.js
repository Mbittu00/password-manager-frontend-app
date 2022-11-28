import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useState, useEffect, useContext } from "react";
import context from "../../../context/context";
import icon from "../../../appIcon.json";
import * as Clipboard from "expo-clipboard";
import axios from'axios'
export default function Preview({ navigation }) {
  let { priview,setAccounts,setShowAccount } = useContext(context);
  //console.log(priview);
  let back = () => {
    navigation.goBack();
  };
  const copyToClipboard = async (data, text) => {
    await Clipboard.setStringAsync(data);
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };
  const del=async()=>{
let uri='https://pm-backend-hv8x3v7l9-mbittu00.vercel.app/api/account/delete'
try {
  let {data}=await axios.post(uri,{_id:priview._id})
  setAccounts((n)=>n.filter((p)=>p._id!=data._id))
  setShowAccount((n)=>n.filter((p)=>p._id!=data._id))
  navigation.goBack();
  console.log(data)
} catch (e) {
  alert('somethin is worng')
  console.log(e)
}
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.one} onPress={back}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <View style={styles.two}>
          <Image
            source={{
              uri: icon.find((n) => n.app == priview.app).icon,
            }}
            style={styles.logo}
          />
          <Text style={styles.app}>{priview.app}</Text>
          <Text style={styles.website}>{priview.local}</Text>
        </View>

        <View style={styles.three}>
          {priview.username ? (
            <View style={styles.info}>
              <Text style={styles.feild}>username</Text>
              <View style={styles.datas}>
                <Text style={styles.data}>{priview.username}</Text>
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(priview.username, "copyed username");
                  }}
                >
                  <Feather
                    name="copy"
                    size={24}
                    color="black"
                    style={styles.copy}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ""
          )}
          {priview.email ? (
            <View style={styles.info}>
              <Text style={styles.feild}>email</Text>
              <View style={styles.datas}>
                <Text style={styles.data}>{priview.email}</Text>
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(priview.email, "copyed email");
                  }}
                >
                  <Feather
                    name="copy"
                    size={24}
                    color="black"
                    style={styles.copy}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ""
          )}
          {priview.password ? (
            <View style={styles.info}>
              <Text style={styles.feild}>password</Text>
              <View style={styles.datas}>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
                <Text style={styles.data}>{priview.password}</Text>
      </ScrollView>
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(priview.password, "copyed password");
                  }}
                >
                  <Feather
                    name="copy"
                    size={24}
                    color="black"
                    style={styles.copy}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ""
          )}
          {priview.phone ? (
            <View style={styles.info}>
              <Text style={styles.feild}>phone</Text>
              <View style={styles.datas}>
                <Text style={styles.data}>{priview.phone}</Text>
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(priview.phone, "copyed phone");
                  }}
                >
                  <Feather
                    name="copy"
                    size={24}
                    color="black"
                    style={styles.copy}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.btn}>
      {/*  <TouchableOpacity style={styles.edit}>
          <Text style={styles.editText}>Edit Account</Text>
        </TouchableOpacity>*/}

        <TouchableOpacity style={styles.del}
        onPress={del}>
          <Text style={styles.delText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "space-between",
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
    borderRadius:100
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
  datas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  feild: {
    fontSize: 9,
    textTransform: "capitalize",
    color: "gray",
  },
  copy: {
    transform: [{ translateY: -6 }],
  },
  data: {
    color: "#131313",
  },
  edit: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#97dff1",
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  btn: {
    alignItems: "center",
  },
  editText: {
    color: "#97dff1",
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
  website: {
    fontSize: 10,
    color: "gray",
  },
});
