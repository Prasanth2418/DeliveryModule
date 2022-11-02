import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { TouchableOpacity } from "react-native";
// import {auth} from "../firebase"
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //  const loginPage = auth.onAuthStateChanged(user=>{
  //     if(user){
  //       navigation.navigate("Home")
  //     }
  //   })
  //   return loginPage
  // },[])

  // const Login = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => setError("Email or password invalid"));
  // };
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
      <View style={styles.mainContainer}></View>
      <Text style={styles.container}>InfoEat</Text>
      <Text style={{ textAlign: "center", marginTop: -40 }}>
        Welcome! Please Login your Account.
      </Text>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn.dribbble.com/users/2459530/screenshots/8029114/media/ec7402c26d95030fd111401b35482144.gif",
        }}
      />
      <View style={{ marginTop: 30 }}>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: "white",
            marginTop: 20,
            backgroundColor: "orange",
            borderRadius: 20,
            marginLeft: 100,
            marginRight: 100,
            height: 50,
            paddingTop: 8,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginTop: 10,
  },
  container: {
    margin: 40,
    fontSize: 30,
    textAlign: "center",
  },
  tinyLogo: {
    height: "40%",
    width: "100%",
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default LoginPage;
