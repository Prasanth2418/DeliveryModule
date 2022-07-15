import { View, StyleSheet,TouchableOpacity,Text,Linking,Platform } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Card } from "react-native-elements";

const Tracking = ({ route,navigation }) => {
  const makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${9347128304}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };


  
  const destinationMarker = () => {
    <Marker >
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"red"
        }}
      ></View>
    </Marker>;
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 17.491659,
          longitude: 78.391983,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {destinationMarker()}
      </MapView>
      <View style={{position:"relative",top:"100%",width:"100%"}}>
      <Card style={{backgroundColor:"red"}}>
      <Text style={{fontSize:15}}>Order ID: ED-1234</Text>
           
       <Text style={{fontSize:15}}>Coustmer Name: Developer</Text>
           
        <Text style={{fontSize:15}}>Total Amount:120.00Rs</Text>
      
        <TouchableOpacity onPress={makeCall}>
        <Text style={{textAlign:"center",color:"blue",fontSize:20}} >call</Text>
        </TouchableOpacity>
       
        </Card>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "75%",
    width: "100%",
     alignItems: "center",
    marginTop: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Tracking;







