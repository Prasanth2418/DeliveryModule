import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import Logo from "../assets/Logo.png";
import React from "react";

const ResetPassword = ({ navigation }) => {
  const makeCall = () => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${9347128304}";
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }
    Linking.openURL(phoneNumber);
  };

  return (
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
      <Text style={{ marginTop: 35, paddingLeft: 80, fontSize: 18 }}>
        ResetPassword
      </Text>
      <TouchableOpacity
        style={{ position: "relative", marginLeft: "85%", top: -15 }}
        onPress={() => navigation.navigate("settings")}
      >
        <Text style={{ color: "blue" }}>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          position: "relative",
          top: 5,
        }}
      />
      <Text style={{ textAlign: "center", marginTop: "80%", fontSize: 20 }}>
        Please! Contact Admin to Reset Your Password.
      </Text>
      <TouchableOpacity onPress={makeCall}>
        <Text
          style={{
            textAlign: "center",
            marginTop: "10%",
            fontSize: 20,
            color: "blue",
          }}
        >
          +91-9347128304
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "mailto:support@infoeat.com?subject=Reset Password&body=Please Reset My password."
          )
        }
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: "5%",
            fontSize: 20,
            color: "blue",
          }}
        >
          support@infoeat.com
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;
