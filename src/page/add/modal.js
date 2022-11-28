import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import icon from "../../../appIcon.json";
export default function App({ show, setShow,setApp }) {
  return (
    <Modal visible={show} style={styles.modal}>
      <View style={styles.inputHolder}>
        <View style={styles.mainInput}>
          <EvilIcons name="search" size={30} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="enter app/website name"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {icon.map((e, i) => (
            <TouchableOpacity onPress={() =>{
            setShow(false)
            setApp(e.app)
            }}
            key={i}>
              <Image
                source={{
                  uri: e.icon,
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  img: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
  },
  inputHolder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  input: {
    width: "80%",
    height: 40,
  },
  mainInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
  },
});
