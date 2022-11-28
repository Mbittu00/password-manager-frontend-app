import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function AddBtn({navigation}) {
  let add=()=>{
    navigation.navigate('Add')
  }
  return (
    <TouchableOpacity style={styles.container}
    onPress={add}>
    <Ionicons name="add" size={24} color="black" />
    <Text style={styles.add}>Add Account</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#c4edf7',
    alignItems: 'center',
    justifyContent: 'center',
    width:140,
    flexDirection:'row',
    height:55,
    borderRadius:20,
    position:'absolute',
    bottom:10,
    right:10
  },add:{
    fontWeight:'300',
    fontSize:16
  }
});
    