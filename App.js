import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import Main from "./context/main";
import Route from "./route";
export default function App() {
  let [log, setLog] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" style="dark" />
      <Main>
        <Route log={true} />
        </Main>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
