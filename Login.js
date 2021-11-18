import React from "react";
import {View, Text, Image, TouchableOpacity, Pressable} from "react-native";
import {AntDesign} from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: "center",backgroundColor: "white", alignItems: "center"}}>
            <Image 
            style={{
                width:250,
                height:250,
                borderRadius:20,
                marginBottom: 50,
                transform: [{rotate: "45deg"}]
            }}
            source={{
                uri: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-illustration-transport-bicycle-bicyclemountain-bikebicycleillustration-bicycle-png-image_4006511.jpg"
                }}
                 />
            <Text style={{color: "rgba(0, 0, 0, 6)", fontSize: 24}}>Welcome to</Text>
            <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}>Power Bike Shop</Text>
            <Pressable 
            onPress={() => {
                navigation.navigate("Home")
                }}
                style={{
                    backgroundColor: "#e3e3e3",
                    flexDirection: "row",
                    alignItems: "center",
                    padding:10,
                    paddingHorizontal: 60, 
                    borderRadius:10,
                    marginTop: 20
                }}
            >
               <AntDesign name="google" size={24} color="rgb(256, 100, 10)" />       
            <Text style={{fontSize: 17, marginLeft:15}}>Login with Gmail</Text>
            </Pressable>

            <Pressable 
            onPress={() => {
            navigation.navigate("Home")
            }}
                style={{
                    backgroundColor: "black",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    padding:10,
                    paddingHorizontal: 60, 
                    marginTop: 20
                }}
            >
                <AntDesign name="apple1" size={24} color="white" />
            <Text style={{fontSize: 17, color: "white", marginLeft:15}}>Login with Apple</Text>
            </Pressable>

            <Pressable>
                <Text style={{marginTop: 10, fontWeight: "500", color: "grey"}}>
                    Not a member? 
                    <Text style={{color: "orange", fontWeight: "bold"}}> Signup</Text>
                </Text>
            </Pressable>
        </View>
    );
}