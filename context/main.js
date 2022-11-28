import Context from "./context";
import {useState,useEffect}from'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from'axios'
export default function Main({ children }) {
  let [token,setToken]=useState('')
  let [user,setUser]=useState({})
  let [accouns,setAccounts]=useState([])
  let [showAccount,setShowAccount]=useState([])
  let [priview,setPreview]=useState({})
  let [my,setMy]=useState('')
  let [load,setLoad]=useState(true)
  //chake user login or not
  
useEffect(()=>{
  (async()=>{
  let tok=await AsyncStorage.getItem('token')
  let pas=await AsyncStorage.getItem('password')
    if (tok) {
    setToken(tok) 
    setMy(pas)
    }else{}
    /*await AsyncStorage.setItem('token','')
    await AsyncStorage.setItem('password','')*/
  })()
},[])
//verify user
useEffect(()=>{
  (async()=>{
let uri='https://pm-backend-hv8x3v7l9-mbittu00.vercel.app/api/user/token'
    if (token) {
    let {data}=await axios.post(uri,{token})
    setUser(data)
    }else{}
  })()
},[token])
//get all accouns
useEffect(()=>{
  (async()=>{
let uri='https://pm-backend-hv8x3v7l9-mbittu00.vercel.app/api/account/get'
    if (token && my) {
  let {data}=await axios.post(uri,{token,my})
  console.log(data)
  setAccounts(data)
  setShowAccount(data)
  //setLoad(false)
    }else{
    }
  })()
},[token,my])
//loading
useEffect(()=>{
  if (accouns[0] && user.username) {
    setLoad(false)
  }
},[accouns,user])
  return( 
    <Context.Provider value={{
      token,setToken,user,setUser,accouns,setAccounts,
      priview,setPreview,setShowAccount,showAccount,my,setMy,
      setLoad,load
    }}>
    {children}
    </Context.Provider>
    )
}

