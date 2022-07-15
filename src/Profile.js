import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "../assets/Logo.png";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginTop: 0 }}>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
              position: "relative",
              top: 60,
              left: 20,
            }}
            source={Logo}
          />
        </View>
        <Text style={{ margin: 25, fontSize: 20, marginLeft: 80 }}>
          Personal Details
        </Text>
        <TouchableOpacity
          style={{ position: "relative", marginLeft: "85%", top: "-30%" }}
          onPress={() => navigation.navigate("settings")}
        >
          <Text style={{ color: "blue" }}>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          position: "relative",
          top: -20,
        }}
      />
      <View>
        <Text style={{ paddingLeft: 20, fontSize: 20, fontWeight: "bold" }}>
          Delivery Boy ID
        </Text>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>AB2345G56</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 10,
        }}
      />
      <View>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Name
        </Text>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Developer</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 10,
        }}
      />
      <View>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Mobile No.
        </Text>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>+91-9347256780</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 10,
        }}
      />
      <View>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Gender
        </Text>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>Male</Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 10,
        }}
      />
      <View>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Address
        </Text>
        <Text style={{ paddingLeft: 20, fontSize: 20 }}>
          Hyderabad,Telengana,500072
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          position: "relative",
          top: 10,
        }}
      />
    </View>
  );
};

export default Profile;
