import { StyleSheet, Text, View,ActivityIndicator ,Image} from 'react-native';
export default function Loding() {
  return (
    <View style={styles.container}>
{/*<ActivityIndicator size={80} color="#90f2ea"/>*/}
<Image source={{uri:'https://cdn.dribbble.com/users/148670/screenshots/5252136/media/e7019e9ad90430ab0e796f38c8c7baa0.gif'}} style={styles.img}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },load:{
    backgroundColor:'#bdbdbd',
    padding:10,
    borderRadius:20
  },img:{
    width:400,
    height:200
  }
});
    