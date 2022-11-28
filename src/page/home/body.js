import { StyleSheet, Text, View, ScrollView } from "react-native";
import Pass from "./pass";
export default function Body({navigation,accouns}) {
  return (
    <View style={styles.container}>
 {accouns? accouns.map((e)=>(
       <Pass key={e._id}
        navigation={navigation}
        data={e}
      />
 ))
:<Text>no data found</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //   alignItems: 'center',
    //  justifyContent: 'center',
  },
});
