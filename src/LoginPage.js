import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import Logo from "../assets/Logo.png";
import { TouchableOpacity } from "react-native";

const LoginPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.mainContainer}></View>
      <Text style={styles.container}>InfoEat</Text>
      <Text style={{ textAlign: "center", marginTop: -40 }}>
        Welcome! Please Login your Account.
      </Text>
      <Image style={styles.tinyLogo} source={Logo} />
      <View style={{ marginTop: 30 }}>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter Username" />
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Password</Text>
        <TextInput
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
            backgroundColor: "red",
            borderRadius: 20,
            marginLeft: 100,
            marginRight: 100,
            height: 50,
            paddingTop:7,
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
