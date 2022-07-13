import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { Card } from "react-native-elements";
import React from 'react'
import Logo from "../assets/Logo.png"
import { ScrollView } from 'react-native'

const Collections = ({navigation}) => {
  return (
    <View>
      <View style={styles.MainContainer}>
        <View>
          <Image style={styles.tinyLogo} source={Logo} />
        </View>
        <Text style={styles.Container}>Collections</Text>
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
          borderBottomWidth: 1,
          position: "relative",
          top: 5,
        }}
      />
      <ScrollView>
      
        <Card>
            <Text style={{marginBottom:5}}>Order ID</Text>
            <Text style={{position:"relative",marginLeft:"80%",top:"-20%"}}>ED-1234</Text>
            <Card.Divider/>
        <Text>Amount</Text>
        <Text style={{position:"relative",marginLeft:"80%",top:"-15%"}}>40.00 Rs</Text>
        <TouchableOpacity>
        <Text style={{textAlign:"center",color:"blue"}} onPress={() => navigation.navigate("ViewDetails")}>Payment Details</Text>
        </TouchableOpacity>
       
        </Card>
       
      </ScrollView>
    </View>
  )
}
const styles =StyleSheet.create({
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
})

export default Collections