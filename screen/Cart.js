import React from "react";
import { View, Text, Image, TouchableOpacity,Pressable } from "react-native";
import { Ionicons, FontAwesome, AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Cart() {
    return (
        <View style={{
            backgroundColor: 'white', 
            flex: 1, 
            paddingTop: 30, 
            paddingHorizontal: 10,
            marginLeft: 5,
            }}>
                
            <View style={{
                flexDirection: 'row', 
                justifyContent:'space-between', 
                alignItems:'center',
                }}>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <FontAwesome name="motorcycle" size={24} color="black" />
                <View style={{flexDirection: 'row'}}>
                   <AntDesign name="search1" size={24} color="black" />
                   <Ionicons name="notifications-outline" size={22} color="black" />
                </View>
             </View>
             <Text style={{ color:'black', fontSize: 24, marginTop: 15,}}>The World's,  <Text style={{ color: 'rgb(256,100,10)', fontSize: 30, fontWeight: '500'}}>Best Bike</Text>
            </Text>
            <Text style={{color:'black', fontSize: 22, fontWeight:'700', marginTop:10}}>Categories</Text>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{
                    alignItems: 'center',
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,  
                    marginRight: 20,
                    width: 60,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{color:'rgb(256,100,10)', fontSize:22,}}>All</Text></TouchableOpacity>
                </View>
                <View style={{ 
                    alignItems: 'center',
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15, 
                    marginRight: 20, 
                    width: 90,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Roadbike</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center', 
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,
                    marginRight:20, 
                    width: 90,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Mountain</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent:'space-between', 
                    backgroundColor: '#e3e3e3', 
                    padding:10, 
                    borderRadius: 15,
                    marginRight: 20, 
                    width: 60,
                    height: 40 }}>
                        <TouchableOpacity><Text style={{fontWeight: '300', fontSize: 15}}>Urban</Text></TouchableOpacity>
                </View>
            </View>
            </View>