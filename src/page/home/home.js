import { StyleSheet, Text, View,ScrollView,BackHandler } from 'react-native';
import Head from'./head'
import Body from'./body'
import AddBtn from'./addBtn'
import Loading from'../../../component/load'
import {useState,useEffect,useContext}from'react'
import context from'../../../context/context'
export default function App({navigation}) {
  let {accouns,user,load}=useContext(context)
  return (
    <View style={styles.sv}>
 {!load?  
 <>
 <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}>
<Head navigation={navigation}/>
<Body navigation={navigation} accouns={accouns}/>
    </ScrollView>
<AddBtn navigation={navigation}/>
</>
   :
<Loading/>
 }
</View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  //  Height:'100%',
 //   width:'100%',
    backgroundColor: '#fff',
    //alignItems: 'center',
  //  justifyContent: 'center',
//  
  },sv:{
    flex:1,
   // position:'relative',
   // backgroundColor:'red'
  }
});
    