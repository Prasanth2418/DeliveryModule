import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card, Button } from "react-native-elements";
import React from "react";
import Logo from "../assets/Logo.png";

const PendingOrdersPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.MainContainer}>
        <View>
          <Image style={styles.tinyLogo} source={Logo} />
        </View>
        <Text style={styles.Container}>New Orders</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 5,
        }}
      />
      <ScrollView>
        <Card>
          <Card.Title style={{ marginBottom: 5 }}>Order ID</Card.Title>
          <Card.Title style={{ marginBottom: 5 }}>ED-1234</Card.Title>

          <Card.Divider />
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Data & Time</Text>
          <Text style={{ marginBottom: -20 }}>12-02-2022 12:00 pm </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "70%",
              top: "-5%",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Order Status
          </Text>
          <Text style={{ position: "relative", marginLeft: "70%", top: "-5%" }}>
            Pending
          </Text>
          <Card.Divider />
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Coustmer Details
          </Text>
          <Text>Developer</Text>
          <Text>+91 9347128340</Text>
          <Text style={{ marginBottom: 5 }}>Location: Banglore</Text>
          <Card.Divider />
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Payment Details
          </Text>
          <Text>Total Amount: 120.00 Rs</Text>
          <Text>Payment Mode: COD</Text>
          <Text style={{ marginBottom: 7 }}>Payment Status: Pending</Text>
          <Button
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor:"green",
            }}
            title="VIEW ORDER"
            onPress={() => navigation.navigate("orderDetails")}
          />
        </Card>
        
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    margin: 0,
  },
  Container: {
    marginTop: 15,
    paddingLeft: "20%",
    fontSize: 20,
    width: "100%",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    position: "relative",
    top: "115%",
    left: 20,
  },
  button: {
    position: "relative",
    marginLeft: "85%",
    top: "-17%",
  },
  text: {
    color: "blue",
  },
});

export default PendingOrdersPage;
