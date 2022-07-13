import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import order from "../assets/orders.png";
import Completed from "../assets/Completed.png";
import Profile from "../assets/Profile.png";
import Rupee from "../assets/Rupee.png";

const HomePage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Container}>Delivery Boy</Text>
      <View>
        <Image style={styles.tinyLogo} source={Logo} />
      </View>
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "blue" }}
          thumbColor={isEnabled ? "blue" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          position: "relative",
          top: -110,
        }}
      />
      <View style={styles.welcom}>
        <Text style={{color:"black",fontSize:20}}>Welcome to InfoEat...</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PendingOrders")}
        >
          <Image style={styles.Logo} source={order} />
          <Text style={styles.welcom1}>Pending Orders: {1}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button2} 
         onPress={() => navigation.navigate("completedOrders")}
        >
          <Image style={styles.Logo2} source={Completed} />
          <Text style={styles.welcom2}>Completed Orders:{1}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button3} 
          onPress={() => navigation.navigate("Collections")}
        >
          <Image style={styles.Logo3} source={Rupee} />
          <Text style={styles.welcom1}>Collections</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate("settings")}>
          <Image style={styles.Logo4} source={Profile} />
          <Text style={styles.welcom2}>Profile & Settings</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          position: "relative",
          top: -340,
        }}
      />
      <SafeAreaView>
        <Text style={styles.welcom4}>
          Delivery Boy Responsibilities & Duties:
        </Text>
        <Text style={styles.welcom4}>
          1.Distributing various packages to specified locations within a given
          time frame. 2.Planning daily travel routes based on locations and time
          frames. 3.Carefully loading and unloading all packages. 4.Accepting
          and recording payment for delivered packages.
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 40,
    fontSize: 20,
    marginLeft: 80,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    position: "relative",
    top: -80,
    left: 20,
  },
  MainContainer: {
    backgroundColor: "white",
    marginTop: 10,
  },
  container: {
    position: "relative",
    right: 20,
    top: -120,
  },
  welcom: {
    margin: 10,
    position: "relative",
    top: -100,
  },
  welcom1: {
    fontSize: 15,
    color:"white"
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    height: 150,
    width: 170,
    position: "relative",
    top: -100,
    right:4,
    marginLeft: 10,
    borderRadius:20
  },
  Logo: {
    width: 100,
    height: 100,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "lightgreen",
    padding: 10,
    height: 150,
    width: 170,
    position: "relative",
    top: -250,
    right:5,
    borderRadius:20,
    marginLeft: "52%",
    
  },
  Logo2: {
    width: 100,
    height: 100,
  },
  welcom2: {
    fontSize: 15,
    color:"white"
  },
  button3: {
    alignItems: "center",
    backgroundColor: "green",
    color:"white",
    padding: 10,
    height: 150,
    width: 170,
    position: "relative",
    top: -220,
    marginLeft: 10,
    borderRadius:20,
    right:4,
  },
  Logo3: {
    width: 100,
    height: 100,
  },
  button4: {
    alignItems: "center",
    backgroundColor: "darkviolet",
    padding: 10,
    height: 150,
    width: 170,
    position: "relative",
    top: -370,
    marginLeft: "52%",
    borderRadius:20,
    right:5,
  },
  Logo4: {
    width: 100,
    height: 100,
  },
  welcom4: {
    position: "relative",
    top: -330,
    marginLeft: 20,
    fontSize: 15,
    color: "black",
  },
});

export default HomePage;
