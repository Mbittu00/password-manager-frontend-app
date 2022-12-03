let uri = "http://192.168.31.72:8080/api/account/add";
import axios from "axios";
let addFun = async (
  name,
  app,
  username,
  password,
  email,
  number,
  local,
  token,
  setAccounts,
  setShowAccount,
  navigation,
  setLoad
) => {
  try {
    if ((app == "instagram") && username!='' && password!='') {
      console.log('call instagram')
    setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        number,
        token
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "facebook") && email!='' || number!='' && password!='' && name!='') {
      console.log('call facebook')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        password,
        email,
        local,
        number,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "snapchat" )&& email!='' || username!='' && password!='') {
      console.log('call snapchat')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (
      (app == "twitter" )&& number!='' ||
      email!='' ||
      username!='' && password!=''
    ) {
      console.log('call twitter')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
        number,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "github" )&& username!='' || email!='' && password!='') {
      console.log('call github')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "google" && name!='' && email!='' && password!='') {
      console.log('call google')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        number,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (
      app === "website" && local!=''
    ) {
      console.log('call website')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        number,
        username,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (
      app == "app" && local!='') {
      console.log('call app')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        number,
        username,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "wifi" && name!='' && password!='') {
      console.log('call wifi')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        name,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "samsung" )&& number!='' || email!='' && password!='') {
      console.log('call samsung')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "mi" )&& number!='' || email!='' && password!='') {
      console.log('call mi')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "raplit") && email!='' || username!='' && password!='') {
      console.log('call raplit')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        username,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "rapidapi" && password!='' && email!='') {
      console.log('call rapidapi')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "vercel" )&& username!='' || email!='') {
      console.log('call vercel')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        username,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "flipkart" )&& email!='' || number!='') {
      console.log('call flipkart')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "irctc" )&& username!='' || email!='' && password!='') {
      console.log('call irctc')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        password,
        username,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "amazon" )&& email!='' || number!='' && password!='') {
      console.log('call amazon')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        password,
        number,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "misho" && number!='') {
      console.log('call misho')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        number,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "groww" && email!='') {
      console.log('call groww')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "zee5" )&& email!='' || number!='' && password!='') {
      console.log('call zee5')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "hotstar" )&& email!='' || number!='') {
      console.log('call hotstar')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "ganna" )&& email!='' || number!='') {
      console.log('call ganna')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "spotify" )&& email!='' || username!='' && password!='') {
      console.log('call spotify')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        username,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if ((app == "netflix" )&& email!='' || number!='' && password!='') {
      console.log('call netflix')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "zoom" && email!='' && number!='') {
      console.log('call zoom')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "discord" && email!='' || number!='' && password!='') {
      console.log('call discord')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        number,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "tinder" && number!='' && password!='') {
      console.log('call tinder')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        name,
        password,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else if (app == "happan" && email!='') {
      console.log('call happan')
      setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        email,
        local,
        token,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
    } else {
    }
  } catch (e) {
    console.error(e);
  }
};
export default addFun;


/*

  
*/

/*

        setLoad(true);
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        number,
        token,
        my,
        name,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
      
      */
/*

if (app=='instagram' && username && password) {
    alert('instagram')
    setLoad(true)
      let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        number,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(
app=='facebook' && email || number && password && name){
  alert('facebook')
  setLoad(true)
let { data } = await axios.post(uri, {
        app,
        password,
        email,
        local,
        number,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='snapchat' && email || username && password){
    alert('snapchat')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='twitter' && number || email || username && password){
    alert('twitter')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
        phone:number,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  } else if(app=='github'&&username||email&&password){
    alert('github')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        username,
        password,
        email,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='google'&&name&&email&&password){
    alert('google')
      setLoad(true)
let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        phone:number,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='website'&&name||password||username||email||phone){
    alert('website')
       setLoad(true)
let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        phone:number,
        username,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='app'&&name||password||username||email||phone){
    alert('app')
       setLoad(true)
let { data } = await axios.post(uri, {
        app,
        name,
        password,
        email,
        local,
        token,
        phone:number,
        username,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='wifi'&&name&&password){
    alert('wifi')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        name,
        password,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='samsung'&&number||email&&password){
    alert('samsung')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        email,
        phone:number,
        password,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='mi'&&number||email&&password){
    alert('mi')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        email,
        phone:number,
        password,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else if(app=='raplit'&&email||username&&password){
    alert('raplit')
    setLoad(true)
let { data } = await axios.post(uri, {
        app,
        email,
        username,
        password,
        local,
        token,
        my,
      });
      setAccounts((n) => [data, ...n]);
      setShowAccount((n) => [data, ...n]);
      navigation.goBack();
      setLoad(false);
  }else{}
  
  */

/*
    if (app=='instagram'&&username&&password) {
    alert('instagram')
  }else if(app=='facebook'&&number||email&&password&&name){
    alert('facebook')
  }else if(app=='snapchat'&&)
  */
