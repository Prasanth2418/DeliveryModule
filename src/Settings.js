import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import React from "react";
import Logo from "../assets/Logo.png";

const Settings = ({ navigation }) => {
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
          Profile & Settings
        </Text>
        <TouchableOpacity
          style={{ position: "relative", marginLeft: "85%", top: "-30%" }}
          onPress={() => navigation.navigate("Home")}
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
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
          }}
        />
      </View>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Name: Delivery Boy
      </Text>
      <Text style={{ textAlign: "center", marginTop: 5 }}>ID: AB2345G56</Text>
      <View>
        <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
          <Text style={{ marginLeft: 20, marginTop: 50, fontSize: 20 }}>
            Profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            position: "relative",
            top: 10,
          }}
        />
        <TouchableOpacity>
          <Text style={{ marginLeft: 20, marginTop: 25, fontSize: 20 }}>
            Rest Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            position: "relative",
            top: 11,
          }}
        />
        <TouchableOpacity>
          <Text style={{ marginLeft: 20, marginTop: 25, fontSize: 20 }}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            position: "relative",
            top: 11,
          }}
        />
      
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 20 }}>
           App Version 11.0
          </Text>
     
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            position: "relative",
            top: 12,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            textAlign: "center",
            marginTop: "20%",
            fontSize: 20,
            color: "red",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
