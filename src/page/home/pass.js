import { StyleSheet, Text, View ,Image,TouchableHighlight,
  TouchableOpacity,ToastAndroid
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import icon from'../../../appIcon.json'
import {useState,useEffect,useContext}from'react'
import context from'../../../context/context'
import * as Clipboard from 'expo-clipboard';

export default function Pass({navigation,data}) {
  console.log(icon.find((n)=>n.app==data.app).app)
  let {setPreview}=useContext(context)
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(data.password);
    ToastAndroid.show("Password copyed", ToastAndroid.SHORT);
  };
  return (
    <TouchableHighlight 
    activeOpacity={0.6}
  underlayColor="#f0f9fc"
  onPress={() =>{ 
  navigation.navigate('Preview')
    setPreview(data)
  }}
  style={styles.th}
    >
    <View style={styles.container}>
    <View style={styles.twoHolder}>
<View style={styles.one}>
<Image source={{uri:icon.find((n)=>n.app==data.app).icon}}
style={styles.logo}/>
</View>
<View style={styles.two}>
<Text style={styles.app}>{data.app}</Text>
<Text style={styles.username}>
{data.username?data.username:data.email}</Text>
</View>
</View>
<TouchableOpacity style={styles.three}
onPress={copyToClipboard}>
<Feather name="copy" size={24} color="black"/>
</TouchableOpacity>
</View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  th:{
   alignItems:'center' ,
   marginTop:5,
   width:'96%',
    alignSelf:'center',
    borderRadius:20
  },container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    width:'100%',
    alignSelf:'center',
    height:65,
  },logo:{
    width:50,
    height:50,
    borderRadius:100,
    alignSelf:'flex-start',
    marginLeft:10
  },three:{
    marginRight:10
  },twoHolder:{
    flexDirection:'row',
    alignItems:'center',
    height:'100%'
  },two:{
    marginLeft:5,
    //justifyContent:'space-between'
  },app:{
    fontSize:16,
    textTransform:'capitalize'
  },username:{
    fontSize:12,
    color:'gray',
    fontWeight:'300'
    //alignSelf:'center'
  }
});
    