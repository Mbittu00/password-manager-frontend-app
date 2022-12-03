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
  let [load,setLoad]=useState(true)
  //chake user login or not
  
useEffect(()=>{
  (async()=>{
  let tok=await AsyncStorage.getItem('token')
    if (tok) {
    setToken(tok) 
    }else{}
 //   await AsyncStorage.setItem('token','')
  })()
},[token])
//verify user
useEffect(()=>{
  (async()=>{
let uri='https://pm-backend-gamma.vercel.app/api/user/token'
    if (token) {
    let {data}=await axios.post(uri,{token})
    setUser(data)
    }else{}
  })()
},[token])
//get all accouns
useEffect(()=>{
  (async()=>{
let uri='https://pm-backend-gamma.vercel.app/api/account/get'
    if (token) {
  let {data}=await axios.post(uri,{token})
  console.log(data)
  setAccounts(data)
  setShowAccount(data)
  //setLoad(false)
    }else{
    }
  })()
},[token])
//loading
useEffect(()=>{
  if (accouns[0] && user.username) {
    setLoad(false)
  }
},[accouns,user])
  return( 
    <Context.Provider value={{
      token,setToken,user,setUser,accouns,setAccounts,
      priview,setPreview,setShowAccount,showAccount,
      setLoad,load
    }}>
    {children}
    </Context.Provider>
    )
}

